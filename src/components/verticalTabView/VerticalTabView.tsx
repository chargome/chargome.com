import React from 'react';

export type ElementType = {
  id: string;
  title: string;
  heading: string;
  subHeading: string;
  dateRange: string;
  html: string;
  link: string;
};

interface Props {
  elements: ElementType[];
}

export const VerticalTabView = ({ elements }: Props): JSX.Element => {
  const [selectedElement, setSelectedElement] = React.useState<ElementType>(elements[0]);

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex flex-col">
        { elements.map((element) => (
          <div
            key={element.id}
            className={`p-2 px-6 flex border-r-2 ${
              element.id === selectedElement.id
                ? 'border-primary bg-primary bg-opacity-30'
                : 'border-secondary'
            }`}
            onClick={() => { setSelectedElement(element); }}
            onKeyPress={(e) => (e.key === 'Enter' ? setSelectedElement(element) : null)}
            role="button"
            tabIndex={0}
          >
            { element.title }
          </div>
        )) }
      </div>
      <div className="p-4 md:p-10">
        <h3 className="text-lg font-mono text-accent">
          {selectedElement.heading}
        </h3>
        <a className="text-md font-mono text-secondary" href={selectedElement.link}>
          {`@${selectedElement.subHeading}`}
        </a>
        <h4 className="text-sm font-mono text-secondary">
          {selectedElement.dateRange}
        </h4>
        <div className="pt-2 prose" dangerouslySetInnerHTML={{ __html: selectedElement.html }} />
      </div>
    </div>
  );
};

export default VerticalTabView;
