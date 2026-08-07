import { TagFolderSelectPanel } from "../../../../../components/TagFolderSelectPanel";
import { useVideoDetailTagSelect } from "../../../hooks/videochannel/videodetail/useVideoDetailTagSelect";


type PropsType = {
    isOpen: boolean;
    closeTagSelectModal: () => void;
}

export function VideoDetailTagFolderSelect({ isOpen, closeTagSelectModal }: PropsType) {

    const {
        tagMasterList,
        handleKeyPress,
        clearInput,
        toggleTagEditList,
        displayTagMaster,
        selectedTagList,
        inputKeyword,
        setInputKeyword,
        filterTagMasterList,
        submitFavorite,
        isMobile,
        isTablet,
        folderOptions,
        selectedFolder,
        selectFolder,
    } = useVideoDetailTagSelect();

    return (
        <TagFolderSelectPanel
            isOpen={isOpen}
            closeTagSelectModal={closeTagSelectModal}
            isMobile={isMobile}
            isTablet={isTablet}
            tagMasterList={tagMasterList}
            displayTagMaster={displayTagMaster}
            inputKeyword={inputKeyword}
            setInputKeyword={setInputKeyword}
            handleKeyPress={handleKeyPress}
            filterTagMasterList={filterTagMasterList}
            clearInput={clearInput}
            folderOptions={folderOptions ?? []}
            selectedFolder={selectedFolder}
            selectFolder={selectFolder}
            submitFavorite={submitFavorite}
            selectedTagList={selectedTagList}
            onToggleTag={toggleTagEditList}
        />
    );
}
