import { StyledCloseModalButton, StyledLogOutButton, StyledSignOutConfirmModalButtonsContainer, StyledSignOutConfirmModalHeadingElement } from "./styledComponents"
import strings from '../../../i18n/strings.json'

const SignOutConfirmModal = () => <>
    <StyledSignOutConfirmModalHeadingElement>
        {strings.signOutConfirmModalHeadingConfirmation}
    </StyledSignOutConfirmModalHeadingElement>
    
    <StyledSignOutConfirmModalButtonsContainer>
        <StyledLogOutButton>{strings.signOutButtonText}</StyledLogOutButton>
        <StyledCloseModalButton>{strings.noSignOutButtonText}</StyledCloseModalButton>
    </StyledSignOutConfirmModalButtonsContainer>

</>

export {SignOutConfirmModal}