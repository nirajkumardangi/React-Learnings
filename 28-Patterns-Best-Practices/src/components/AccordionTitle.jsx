import { useAccordionContext } from './Accordion';

export default function AccordionTitle({id, className, children}) {
  const { openItemId, toggleItem } = useAccordionContext();

  return <h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>;
}
