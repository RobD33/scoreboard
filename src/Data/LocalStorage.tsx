import AppState from "./AppState";
import DataStore from "./DataStore";

export default class LocalStorage implements DataStore{
  key: string;
  constructor() {
    this.key = 'scoreboard';
  }

  saveState(appState: AppState) :void {
    localStorage.setItem(this.key, JSON.stringify(appState));
  }

  loadState() :AppState | null {
    const stateJSON: string | null = localStorage.getItem('scoreboard');
    return stateJSON ? JSON.parse(stateJSON) : null;
  }
}