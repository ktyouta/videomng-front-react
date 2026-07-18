import { TagFolderSelectPanel } from "../../../../components/TagFolderSelectPanel";
import { useHomeVideoDetailTagSelect } from "../../hooks/videodetail/useHomeVideoDetailTagSelect";


type PropsType = {
    closeTagSelectModal: () => void;
}

export function HomeVideoDetailTagSelect({ closeTagSelectModal }: PropsType) {

    console.log("HomeVideoDetailTagSelect render");

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
    } = useHomeVideoDetailTagSelect();

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
