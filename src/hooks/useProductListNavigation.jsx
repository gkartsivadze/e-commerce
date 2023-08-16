export default function useProductListNavigation( direction, item ) {
    if (direction == "prev") {
        item.current.scrollLeft -= window.innerWidth;
    } else if (direction == "next") {
        item.current.scrollLeft += window.innerWidth;

    }
}