export function scrollToTop(behavio?: string) {
    if(behavio === "smooth"){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }else{
        window.scrollTo(0, 0);
    }
   
}