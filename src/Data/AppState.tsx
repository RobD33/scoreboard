import DisplaySettings from "./DisplaySettings";
import Frame from "./Frame";
import Match from "./Match";
import ModalProps from "./ModalProps";
import SessionType from "./SessionType";

export default interface AppState {
  frames: Frame[];
  RRmatches: Match[];
  groupPlayers: string[];
  sessionPlayers: string[];
  displaySettings: DisplaySettings;
  modalProps: ModalProps;
  sessionType: SessionType;
}
