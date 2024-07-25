import { useAccordionContext } from './Accordion';

export default function AccordionItem({ id, title, className, children }) {
  const { openItemId, openItem, closeItem } = useAccordionContext();

  const isOpen = openItemId === id;

  function handleOpen() {
    if (isOpen) {
      closeItem();
    } else {
      openItem(id);
    }
  }

  return (
    <li className={className}>
      <h3 onClick={handleOpen}>{title}</h3> 
      <div
        className={ isOpen ? 'accordion-item-content open' : 'accordion-item-content'}
      >
        {children}
      </div>
    </li>
  );
}
