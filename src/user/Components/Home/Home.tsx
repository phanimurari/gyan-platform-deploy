
import SignInComponent from "../../../Authentication/SignIn/components/SignIn";
import SignOutConfirmModal from "../../../Authentication/SignIn/components/SignOutConfirmModal";
import Header from "../../../common/components/Header";
import ReactPopUpModal from "../../../common/components/ReactPopUpModal";
import SideBar from '../../../common/components/SideBar';
import { commentType, postObjectType } from "../../stores/types";
import CreateAPostContainer from "../CreateAPostContainer";
import PostsContainer from "../PostContainer";
import TagsContainer from "../TagsContainer";
import { StyledHomeContainer, StyledTagsAndPostContainer, StyledTagsMobileViewContainer, StyledTagsViewContainer } from "./styledComponents";


interface HomeProps {
    userLogin: (loginObject: {}) => void,
    displayLoginModal: boolean
    displayCreateApostModal: boolean
    displayOnLogOutModal : boolean
    onToggleLoginModal: (value: boolean) => void
    onToggleCreateAPostModal: (value: boolean) => void
    onToggleSignOutConfirmModal : (value: boolean) => void
    isUerLoggedIn: boolean,
    userLoginApiStatus: number,
    postFetchingApiStatus : number
    listOfPosts: Array<postObjectType>,
    listOfPostTags: Array<string>,
    setSelectedTag: (tag: string) => void,
    selectedPostsTag: string,
    onSearchPost: (searchText: string) => void,
    addPostToListOfPosts: (postObject: any) => void,
    addComment: (commentObject: commentType, id: string) => void,
    onPostLike: (postId: string) => void,
    setSideBarMenu : (displaySideBarMenu : boolean) => void
}

const Home = (props: HomeProps) => {

const { userLogin, displayLoginModal, onToggleLoginModal, displayCreateApostModal, onToggleCreateAPostModal, isUerLoggedIn, userLoginApiStatus, listOfPosts, postFetchingApiStatus , listOfPostTags, setSelectedTag, selectedPostsTag, onSearchPost, addPostToListOfPosts, addComment, onPostLike, setSideBarMenu, displayOnLogOutModal, onToggleSignOutConfirmModal} = props
    
return <StyledHomeContainer> 
    <Header setSideBarMenu={setSideBarMenu} onSearchPost={onSearchPost} onToggleLoginModal={onToggleLoginModal} isUerLoggedIn={isUerLoggedIn} onToggleCreateAPostModal={onToggleCreateAPostModal} onToggleSignOutConfirmModal={onToggleSignOutConfirmModal}/>
    <StyledTagsAndPostContainer>
        <StyledTagsViewContainer>
            <TagsContainer onToggleLoginModal={onToggleLoginModal} listOfPosts={listOfPosts} onToggleCreateAPostModal={onToggleCreateAPostModal} postFetchingApiStatus={postFetchingApiStatus} listOfPostTags={listOfPostTags} setSelectedTag={setSelectedTag} selectedPostsTag={selectedPostsTag} />
        </StyledTagsViewContainer>
        <StyledTagsMobileViewContainer>
            <SideBar listOfPostTags={listOfPostTags} setSelectedTag={setSelectedTag} selectedPostsTag={selectedPostsTag} />
        </StyledTagsMobileViewContainer>
        <PostsContainer onToggleLoginModal={onToggleLoginModal} listOfPosts={listOfPosts} onToggleCreateAPostModal={onToggleCreateAPostModal} postFetchingApiStatus={postFetchingApiStatus} addComment={addComment} onPostLike={onPostLike} setSelectedTag={setSelectedTag}/>
        <ReactPopUpModal
            componentPassed={<SignOutConfirmModal onToggleLoginModal={onToggleSignOutConfirmModal}/>}
            displayModal={displayOnLogOutModal}
            onToggleLoginModal={onToggleSignOutConfirmModal} />
        <ReactPopUpModal
            componentPassed={<CreateAPostContainer addPostToListOfPosts={addPostToListOfPosts} onToggleCreateAPostModal={onToggleCreateAPostModal} />}
            displayModal={displayCreateApostModal}
            onToggleLoginModal={onToggleCreateAPostModal} />
        <ReactPopUpModal
            componentPassed={<SignInComponent userLogin={userLogin} onToggleLoginModal={onToggleLoginModal} userLoginApiStatus={userLoginApiStatus} />}
            displayModal={displayLoginModal}
            onToggleLoginModal={onToggleLoginModal} />
    </StyledTagsAndPostContainer>
</StyledHomeContainer>
}

export { Home }