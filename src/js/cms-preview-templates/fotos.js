import React from "react";

const SmallImage = ({image}) =>
    <div class="col-3">
        <a href={image} class="d-block">
            <img src={image} alt="" class="d-block w-100"/>
        </a>
    </div>;
const MediumImage = ({image}) =>
<div class="col-6">
    <a href={image} class="d-block">
        <img src={image} alt="" class="d-block w-100"/>
    </a>
</div>;
const LargeImage = ({image}) =>
<div class="col-12">
    <a href={image} class="d-block">
        <img src={image} alt="" class="d-block w-100"/>
    </a>
</div>;

function getImage(size, image) {
    if (size == "small") {
        return <SmallImage image={image}/>
    }
    if (size == "medium") {
        return <MediumImage image={image}/>
    }
    return <LargeImage image={image}/>
} 

export default class FotosPreview extends React.Component {
    render () {
        const {entry, getAsset, widgetFor} = this.props;
        const entryFotoEntries = entry.getIn(["data", "images"])

        const title = entry.getIn(["data", "title"])
        const subtitle = entry.getIn(["data", "subtitle"])
        const images = entryFotoEntries ? entryFotoEntries.toJS() : []

        return <section class="py-10 py-lg-20 bg-bg-3 text-center">
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                    <h2 class="display-5 mb-6 aos-init aos-animate" data-aos="fade-down" data-aos-delay="0">
                        {title}
                    </h2>
                    <p class="mb-15 fs-2 aos-init aos-animate" data-aos="fade-down" data-aos-delay="150">
                        {subtitle}
                    </p>
                </div>
                </div>
                <div class="row mt-6">
                    {images.map(({image, size}, i) =>
                        this.getImage(size, image))}
                </div>
            </div>
        </section>
    }
}