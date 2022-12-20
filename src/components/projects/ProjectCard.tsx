import Link from 'next/link';
import { ProjectType } from '../../model/md/Project';

export const ProjectCard = ({
  id, title, gif, png, subtitle, technologies, link,
}: ProjectType): JSX.Element => (
  <Link href={link} key={id}>
    <div
      className="flex flex-col cursor-pointer transition md:hover:scale-110 md:flex-row md:w-[700px] md:h-[146px] border-4 border-primary shadow-xl rounded-lg overflow-hidden xl:w-[890px] xl:h-[180px]"
    >
      <div className="basis-2/5">
        <img className="w-full h-full" alt={title} src={gif !== '' ? gif : png} />
      </div>
      <div className="text-xl basis-3/5 p-4 border-t-4 md:border-t-0 md:border-l-4 border-primary">
        <h3 className="font-mono text-primary">
          {title}
        </h3>
        <h4 className="text-lg font-mono text-secondary">
          {`[${subtitle}]`}
        </h4>
        <div className="text-sm">#{technologies.join(' #')}</div>
      </div>
    </div>
  </Link>
);
