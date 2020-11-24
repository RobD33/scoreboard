import DisplaySettings from "./DisplaySettings";
import Frame from "./Frame";
import ModalProps from "./ModalProps";

export default interface AppState {
  frames: Frame[];
  groupPlayers: string[];
  sessionPlayers: string[];
  displaySettings: DisplaySettings;
  modalProps: ModalProps;
}