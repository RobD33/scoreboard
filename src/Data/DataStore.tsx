import AppState from "./AppState";

export default interface DataStore {
  saveState(appState: AppState) :void;
  loadState(): AppState | null;
}