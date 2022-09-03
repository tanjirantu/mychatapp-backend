import React from 'react';

const NotificationIcon = ({ fill = 'white' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22">
            <defs></defs>
            <g id="Iconly_Light_Notification" data-name="Iconly/Light/Notification" transform="translate(-2.5 -1)">
                <g id="Notification" transform="translate(3.5 2)">
                    <path
                        id="Stroke_1"
                        data-name="Stroke 1"
                        style={{
                            fill: 'none',
                            stroke: fill,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeMiterlimit: 10,
                            strokeWidth: '2px',
                        }}
                        d="M8.5 15.848c5.639 0 8.248-.723 8.5-3.627 0-2.9-1.819-2.715-1.819-6.275C15.181 3.164 12.545 0 8.5 0S1.819 3.164 1.819 5.945C1.819 9.505 0 9.319 0 12.221c.253 2.914 2.862 3.627 8.5 3.627z"
                    />
                    <path
                        id="Stroke_3"
                        data-name="Stroke 3"
                        style={{
                            fill: 'none',
                            stroke: fill,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeMiterlimit: 10,
                            strokeWidth: '2px',
                        }}
                        d="M4.869 0A3.165 3.165 0 0 1 0 0"
                        transform="translate(6.019 18.857)"
                    />
                </g>
            </g>
        </svg>
    );
};

export default NotificationIcon;
