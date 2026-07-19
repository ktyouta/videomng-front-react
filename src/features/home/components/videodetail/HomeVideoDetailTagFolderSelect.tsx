import { TagFolderSelectPanel } from "../../../../components/TagFolderSelectPanel";
import { useHomeVideoDetailTagFolderSelect } from "../../hooks/videodetail/useHomeVideoDetailTagFolderSelect";


type PropsType = {
    closeTagSelectModal: () => void;
}

export function HomeVideoDetailTagFolderSelect({ closeTagSelectModal }: PropsType) {

    console.log("HomeVideoDetailTagFolderSelect render");

    const {
        tagMasterList,
        handleKeyPress,
        clearInput,
        toggleTagEditList,
        displayTagMaster,
        inputKeyword,
        setInputKeyword,
        filterTagMasterList,
        submitFavorite,
        isMobile,
        isTablet,
        selectedTagList,
        folderOptions,
        selectedFolder,
        selectFolder,
    } = useHomeVideoDetailTagFolderSelect();

    return (
        <TagFolderSelectPanel
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
            folderOptions={folderOptions}
            selectedFolder={selectedFolder}
            selectFolder={selectFolder}
            submitFavorite={submitFavorite}
            selectedTagList={selectedTagList}
            onToggleTag={toggleTagEditList}
        />
    );
}
