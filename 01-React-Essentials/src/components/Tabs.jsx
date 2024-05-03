/* eslint-disable react/prop-types */

export default function Tabs({ buttons, children, ButtonsContainer='menu' }) {
  // const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  )
}
