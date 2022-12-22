---
id: deep-learning-with-fast-ai-1
title: "Deep Learning with fastai: Chapter 1"
subtitle: Use ML for finding the breed of my shelter dog
datePublished: "2022-12-21"
tags: ['ML', 'AI', 'python', 'fastai']
---

## intro

I asked my friend [ChatGPT](https://chat.openai.com) recently how I could improve my machine learning skills with some open source hands-on course. Besides some well-known courses like the [machine learning crash course from google](https://developers.google.com/machine-learning/crash-course), it also listed a course that hadn't particularly crossed my browser yet: [Practical Deep Learning for Coders by fastai](https://course.fast.ai/). It's a wonderful modern deep learning course by Jeremy Howard and Dr. Rachel Thomas. Unlike other courses this one diverts from the academical procedure to first get deep into theory and apply it afterwards on practical lessons, but rather delivers the theory side-by-side with actual coding examples.

The course is taught through Jupyter Notebooks, Youtube Videos and a book (also available via Jupyter). It's open to the student on how to go through the material, but I have found it useful to first read the according chapter in the book, then watch the video and finally go through the Jupyter notebook on [Kaggle](https://www.kaggle.com/).

## chapter 1: getting started

The first chapter gives a brief overview on modern machine learning techniques, libraries and applications (basically what AI can do as of 2022). It also serves as a brief introduction to Jupyter Notebooks and Kaggle.

The practical part consists of demonstrating that a computer science problem that once took several years to solve ("tell me if this picture contains a bird"), can now be done in a few lines of code. What was new to me was the fact that the input data from the model (pictures of birds and woods) just came from a regular search engine query in python. The downloaded images were put into accordingly labeled folders, the model was trained with them and that was it.

I adapted the example of the course to find out which dogbreed my shelter dog most likely was (I narrowed it down to three plausible categories).

## training a dog breed detection model

First, we need a way to get the images onto our server:

```python
from duckduckgo_search import ddg_images
from fastcore.all import *

# this function just uses a simple duckduckgo search to get images from the internet
def search_images(term, max_images=30):
    print(f"Searching for '{term}'")
    return L(ddg_images(term, max_results=max_images)).itemgot('image')

```

Now we fetch the input data and put them into accordingly labled directories:

```python
from time import sleep
from fastdownload import download_url
from fastai.vision.all import *

# I narrowed down the search to these three breeds
searches = 'deutscher jagdterrier','rottweiler', 'ungarische bracke'
path = Path('doggos')

for o in searches:
    dest = (path/o)
    dest.mkdir(exist_ok=True, parents=True)
    download_images(dest, urls=search_images(f'{o} foto', 100))
    sleep(10)  # Pause between searches to avoid over-loading server
    resize_images(path/o, max_size=400, dest=path/o)
```

Clean up our downloaded images (remove faulty ones):

```python
failed = verify_images(get_image_files(path))
failed.map(Path.unlink)
len(failed)
```

Create a fastai DataBlock instance, which contains training and validation data:

```python
dls = DataBlock(
    blocks=(ImageBlock, CategoryBlock), 
    get_items=get_image_files, 
    splitter=RandomSplitter(valid_pct=0.2, seed=42),
    get_y=parent_label,
    item_tfms=[Resize(192, method='squish')] # this line should be improved by using data augmentation
).dataloaders(path, bs=32)

dls.show_batch(max_n=6)
```

Here's the output of the above `show_batch` call:

![doggos](/images/doggos.png)

Let's train the model! The `fine_tune` method starts with a pre-trained model that was done on images from 1000 categories and adapting it to our data (saves time and computing power):

```python
learn = vision_learner(dls, resnet18, metrics=error_rate)
learn.fine_tune(3)
```

Now we're all set up for using our trained classifier. In my case I just uploaded a bunch of pics of my dog (Albert) to kaggle and checked what category it predicts with what certainty:

```python
predict_img = '/kaggle/input/albi-pics/albi1.png'
category,cat_index,probs = learn.predict(PILImage.create(predict_img))
print(f"Here Albert looks like a: {category}.")
print(f"Probability it's a {category}: {probs[cat_index]:.4f}")
Image.open(predict_img).to_thumb(256,256)
```

And finally, here are some of the results:

<img src="/images/albi1.png" alt="albi" width="400"/>
<img src="/images/albi2.png" alt="albi" width="400"/>
<img src="/images/albi3.png" alt="albi" width="400"/>

## conclusion

I did some courses on machine leanrning in university, checked out some other online resources but this course is the best resource I've come across so far. The pace, the structure and the ongoing encouragement to experiment with the practical parts is what makes this course stand out.

Training the Albi-classifier was a lot of fun, since it was the first time I've used the fastai libs with online images. I had this project done in less than an hour – but learned a lot from it.