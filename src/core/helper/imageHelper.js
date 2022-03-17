import React from "react";

const ImageHelper = ({ hostel }) => {

    return (
        <div className="rounded border border-success p-2">
            <img src={hostel.image}

                style={{ maxHeight: "100%", maxWidth: "100%" }}
                className="mb-3 rounded"
                alt="" />

        </div>

    );
};



export default ImageHelper;