/* eslint-disable react/prop-types */

export default function Tabs({ buttons, children, ButtonsContainer }) {
  // const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  )
}
