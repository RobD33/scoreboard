export default interface ModalProps {
    message: string;
    positiveButtonText: string;
    negativeButtonText: string;
    positiveCallback: Function;
    negativeCallback: Function;
    active: boolean;
}