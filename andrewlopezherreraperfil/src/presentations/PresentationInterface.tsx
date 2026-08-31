export default interface PresentationsInterface {
  title: string;
  description: string;
  completeDescription: string;
  image: string;
  id: string;
  video: string;
  documentPDF: string;
  documentPresentation: string;
  photoEvent: {
    image: string;
    id: string;
  }[];
};