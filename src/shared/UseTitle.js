const useTitle = () => {
  document.title = `${document.location.pathname.split("/")[1]} - Tiffin Bhai`;
};
export default useTitle;
