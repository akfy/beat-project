const mesureWidth = item => {
    let reqItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest(".products-menu__list");
    const titlesBlocks = container.find(".products-menu__title");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
    
    const textContainer = item.find(".products-menu__content-text");
    
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));
    
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const isPhone = window.matchMedia("(max-width: 480px)").matches;
    if(isMobile) {
        reqItemWidth = screenWidth - titlesWidth;
    }
    else {
        reqItemWidth = 500;
    }

    if(isPhone) {
        reqItemWidth = screenWidth - titlesBlocks.width();
    }
    

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingLeft - paddingRight
    }

    
}
const closeEveryItemInContainer = container => {
    const items = container.find(".products-menu__item");
    const content = container.find(".products-menu__content");
    items.removeClass("active");
    content.width(0);
}


const openEItem = item => {
    const hiddenContent = item.find(".products-menu__content");
    const reqWidth = mesureWidth(item);
    item.addClass("active");
    const textBlock = item.find(".products-menu__content-text");
    console.log(reqWidth.textContainer);
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);

}
$(".products-menu__title").on("click", e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products-menu__list");
    if (itemOpened) {
       
        closeEveryItemInContainer(container);

    } else {
        closeEveryItemInContainer(container);
        openEItem(item);

    }
    

})