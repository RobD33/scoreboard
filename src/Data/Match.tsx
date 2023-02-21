import Frame from "./Frame";

export default interface Match {
    playerOne: string;
    playerTwo: string;
    winner: string | undefined;
    frames: Frame[];
}