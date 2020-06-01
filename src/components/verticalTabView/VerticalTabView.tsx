import React from 'react';

import {
  TabViewContainer,
  NavContainer,
  NavElement,
  ContentContainer,
  ContentHeading,
  SubHeading,
  ContentRange,
  ContentText,
} from './VerticalTabView.css';

export type ElementType = {
  id: string;
  title: string;
  heading: string;
  subHeading: string;
  dateRange: string;
  html: string;
  link: string;
};

type Props = {
  elements: ElementType[];
};

const VerticalTabView: React.FC<Props> = ({ elements }) => {
  const [selectedElement, setSelectedElement] = React.useState<ElementType>(elements[0]);

  const renderElement = (element: ElementType) => (
    <NavElement
      key={element.id}
      onClick={() => { setSelectedElement(element); }}
      active={element.id === selectedElement.id}
    >
      { element.title }
    </NavElement>
  );

  return (
    <TabViewContainer>
      <NavContainer>
        { elements.map(renderElement) }
      </NavContainer>
      <ContentContainer>
        <ContentHeading>{selectedElement.heading}</ContentHeading>
        <SubHeading href={selectedElement.link}>{`@${selectedElement.subHeading}`}</SubHeading>
        <ContentRange>{selectedElement.dateRange}</ContentRange>
        <ContentText dangerouslySetInnerHTML={{ __html: selectedElement.html }} />
      </ContentContainer>
    </TabViewContainer>
  );
};

export default VerticalTabView;
