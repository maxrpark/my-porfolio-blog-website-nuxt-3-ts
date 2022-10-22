import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

gsap.registerPlugin(Flip);
const updateFilterAnimation = (array: any[], tag: string) => {
    let tempFilterList = [...array];

    let items = gsap.utils.toArray(".single-project") as HTMLDivElement[];
    let state = Flip.getState(items);

    if (tag !== "all") {
        tempFilterList = tempFilterList.filter((el) => el.tags.includes(tag));
    }

    items.forEach((item: HTMLDivElement) => {
        if (tempFilterList.find((i) => i.url == item.id)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

    Flip.from(state, {
        duration: 1,
        scale: true,
        absolute: false,
        ease: "power1.inOut",
        onEnter: (elements: any) => {
            {
                gsap.fromTo(
                    elements,
                    { opacity: 0, scale: 0 },
                    { opacity: 1, scale: 1, duration: 0.6 }
                );
            }
        },
        onLeave: (elements: any) =>
            gsap.fromTo(
                elements,
                { opacity: 1, scale: 1 },
                { opacity: 0, scale: 0, duration: 0.6 }
            ),
    });
};

export default updateFilterAnimation;
