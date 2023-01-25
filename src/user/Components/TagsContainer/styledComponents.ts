import styled from "styled-components";
import tw from "twin.macro";

import { device } from '../../../common/constants/devicesBreakPoints/index'
import colors from '../../styleGuide/themes/colors.json'



export const StyledTagsContainer = styled.div`
@media ${device.mobileS}{ 
  display: none;
}

@media ${device.laptop} {
  ${tw`flex flex-col`};
}

`

export const StyledTagElementContainer = styled.ul`${tw`p-0`}`

export const StyledLoadingViewContainer = styled.div`${tw `flex h-screen flex items-center justify-center`}`