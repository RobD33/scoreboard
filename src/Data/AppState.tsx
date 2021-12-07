import DisplaySettings from "./DisplaySettings";
import Frame from "./Frame";
import ModalProps from "./ModalProps";
import SessionType from "./SessionType";

export default interface AppState {
  frames: Frame[];
  groupPlayers: string[];
  sessionPlayers: string[];
  displaySettings: DisplaySettings;
  modalProps: ModalProps;
  sessionType: SessionType;
}
