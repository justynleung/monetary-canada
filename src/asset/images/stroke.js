import * as React from "react"
const SvgComponent = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={500} height={500} {...props}>
        <path
            fill="none"
            d="M35.348 416.192s53.592-25.656 90.08-133.98c36.488-108.324 23.945-153.364 56.442-68.415s67.845 101.482 98.062-14.253c30.216-115.736 29.076-168.757 44.47-101.482 15.393 67.274 59.292 122.577 77.536 125.427l18.244 2.85"
            style={{
                fill: "#ff652f",
                fillOpacity: 0,
                stroke: "#ff652f",
                strokeWidth: 65,
                strokeLinecap: "round",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "normal",
                strokeLinejoin: "round",
            }}
        />
    </svg>
)
export default SvgComponent
