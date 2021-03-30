import React from "react";

function PDFResume() {
    return (
        <section>
        <h2 class="invisible">Main page content</h2>
        <section class="container marginBottomCont">
            <h3 class="invisible">Bootstrap grid containing all the cards</h3>
            <section class="row justify-content-center">
                <h4 class="invisible">First row of grid</h4>
                <section class="embed-responsive embed-responsive-1by1 embedSize">
                    <embed class="embed-responsive-item" src="https://docs.google.com/file/d/1ckgdZf68hT51Xp8wnZJF_p2l7FvVdbGJ/preview?usp=drivesdk"/>
                </section>
            </section>
        </section>
    </section>
    )
}

export default PDFResume;