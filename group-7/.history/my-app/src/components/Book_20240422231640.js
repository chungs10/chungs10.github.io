import HTMLFlipBook from "react-pageflip";
import bookLeft from ".././images/bookLeft.png";
import bookRight from ".././images/bookRight.png";
import MuseumForm from "./MuseumForm.js";

import { useState } from "react";
import Draggable from "react-draggable";
import stamp1 from ".././images/stamp1.png";
import stamp2 from ".././images/stamp2.png";
import stamp3 from ".././images/stamp3.png";
import stamp4 from ".././images/stamp4.png";
import stamp5 from ".././images/stamp5.png";
import stamp6 from ".././images/stamp6.png";
import stamp7 from ".././images/stamp7.png";

import "./Book.css";

function MyBook(props) {
  const [showForm, setShowForm] = useState(false);

  const handleCircleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "88vh",
        borderRadius: "20px",
        background: "#E2D6C0",
        marginRight: "40px",
        marginLeft: "170px",
        paddingTop: "20px",
        overflow: "hidden",
      }}
    >
      <div className="Pencil_Div">
        <svg
          width="373"
          height="408"
          viewBox="0 0 373 408"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_265_178)">
            <rect
              x="36.2246"
              y="340.105"
              width="36"
              height="48.0032"
              transform="rotate(42.168 36.2246 340.105)"
              fill="#4B4338"
            />
            <path
              d="M311.661 36L338.344 60.167L360.5 15.5L356 11L311.661 36Z"
              fill="#FDF3DE"
            />
            <rect
              x="363.351"
              y="2.9375"
              width="6.38776"
              height="11.0878"
              transform="rotate(42.5682 363.351 2.9375)"
              fill="#4B4338"
            />
            <rect
              x="311.661"
              y="36"
              width="36"
              height="442"
              transform="rotate(42.168 311.661 36)"
              fill="#FF6E34"
            />
            <rect
              x="311.661"
              y="36"
              width="16.8831"
              height="442"
              transform="rotate(42.168 311.661 36)"
              fill="#BE4616"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_265_178"
              x="-0.000244141"
              y="2.9375"
              width="372.055"
              height="404.914"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_265_178"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_265_178"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="AddButton_Div">
        <svg
          id="addButton"
          width="213"
          height="213"
          viewBox="0 0 213 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          alt="Circle"
          style={{
            width: "100%",
            height: "100%",
          }}
          onClick={handleCircleClick}
          stroke="#4B4338"
        >
          <g filter="url(#filter0_d_160_611)">
            <circle
              cx="106.246"
              cy="106.246"
              r="75.5"
              transform="rotate(-28.1437 106.246 106.246)"
              fill="#4B4338"
              stroke-width="6"
            />
            <path
              d="M74.6192 98.5059C74.6192 98.5059 76.7611 93.7109 81.045 84.1211C81.0775 84.043 81.237 84.0039 81.5235 84.0039C81.81 84.0039 81.9727 84.043 82.0118 84.1211L88.6329 98.5059C88.8868 99.0983 89.1374 99.4531 89.3848 99.5703C89.4695 99.6094 89.5118 99.6908 89.5118 99.8145C89.5118 99.9381 89.4695 100 89.3848 100H85.8497C85.765 100 85.7227 99.9447 85.7227 99.834C85.7227 99.7168 85.7357 99.6484 85.7618 99.6289C85.7943 99.6029 85.8366 99.5801 85.8887 99.5605C85.9408 99.5345 85.9831 99.5052 86.0157 99.4727C86.2631 99.2253 86.3868 98.9974 86.3868 98.7891C86.3868 98.5742 86.364 98.3984 86.3184 98.2617L84.9024 94.9121H77.8614L76.4747 98.2617C76.4291 98.3984 76.4063 98.5026 76.4063 98.5742V98.6816C76.4063 98.6881 76.4063 98.6947 76.4063 98.7012C76.4063 98.9681 76.53 99.2253 76.7774 99.4727C76.8034 99.4987 76.8588 99.5312 76.9434 99.5703C77.0281 99.6094 77.0704 99.6908 77.0704 99.8145C77.0704 99.9381 77.0281 100 76.9434 100H73.8672C73.7826 100 73.7403 99.9447 73.7403 99.834C73.7403 99.7168 73.7533 99.6484 73.7794 99.6289C73.8119 99.6029 73.8542 99.5768 73.9063 99.5508C74.1211 99.4596 74.3588 99.1113 74.6192 98.5059ZM78.5547 93.3594C78.5417 93.3789 78.5385 93.4049 78.545 93.4375C78.5515 93.4635 78.5645 93.4766 78.584 93.4766H84.1602C84.1797 93.4766 84.1928 93.4635 84.1993 93.4375C84.2058 93.4049 84.2025 93.3789 84.1895 93.3594L81.3672 87.2266H81.2989L78.5547 93.3594ZM95.9278 100H91.0157C90.931 100 90.8887 99.9447 90.8887 99.834C90.8887 99.7168 90.9017 99.6484 90.9278 99.6289C90.9603 99.6029 91.0027 99.5801 91.0547 99.5605C91.1068 99.5345 91.1719 99.4824 91.2501 99.4043C91.3347 99.3197 91.4226 99.1699 91.5137 98.9551C91.6049 98.7337 91.6504 98.5124 91.6504 98.291V85.7129C91.6504 85.2376 91.4942 84.8437 91.1817 84.5312C91.1557 84.5052 91.1003 84.4727 91.0157 84.4336C90.931 84.3945 90.8887 84.3132 90.8887 84.1895C90.8887 84.0658 90.931 84.0039 91.0157 84.0039H95.4395C97.028 84.0039 98.5482 84.4336 100 85.293C101.029 85.9049 101.882 86.7708 102.559 87.8906C103.236 89.0039 103.574 90.3581 103.574 91.9531C103.574 92.9687 103.385 93.9616 103.008 94.9316C102.63 95.8952 102.113 96.7513 101.455 97.5C100.804 98.2487 99.9935 98.8542 99.0235 99.3164C98.06 99.7721 97.028 100 95.9278 100ZM93.545 98.1055C93.545 98.3464 93.7435 98.4668 94.1407 98.4668H95.2344C97.8777 98.4603 99.7136 97.5586 100.742 95.7617C101.341 94.7135 101.641 93.444 101.641 91.9531C101.641 90.1367 101.139 88.6361 100.137 87.4512C99.6355 86.8587 98.9682 86.3965 98.1348 86.0645C97.3015 85.7259 96.3412 85.5566 95.254 85.5566H93.7501C93.698 85.5566 93.6491 85.5762 93.6036 85.6152C93.5645 85.6543 93.545 85.7031 93.545 85.7617V98.1055ZM110.4 100H105.488C105.404 100 105.361 99.9447 105.361 99.834C105.361 99.7168 105.374 99.6484 105.4 99.6289C105.433 99.6029 105.475 99.5801 105.527 99.5605C105.579 99.5345 105.645 99.4824 105.723 99.4043C105.807 99.3197 105.895 99.1699 105.986 98.9551C106.078 98.7337 106.123 98.5124 106.123 98.291V85.7129C106.123 85.2376 105.967 84.8437 105.654 84.5312C105.628 84.5052 105.573 84.4727 105.488 84.4336C105.404 84.3945 105.361 84.3132 105.361 84.1895C105.361 84.0658 105.404 84.0039 105.488 84.0039H109.912C111.501 84.0039 113.021 84.4336 114.473 85.293C115.501 85.9049 116.354 86.7708 117.031 87.8906C117.708 89.0039 118.047 90.3581 118.047 91.9531C118.047 92.9687 117.858 93.9616 117.481 94.9316C117.103 95.8952 116.585 96.7513 115.928 97.5C115.277 98.2487 114.466 98.8542 113.496 99.3164C112.533 99.7721 111.501 100 110.4 100ZM108.018 98.1055C108.018 98.3464 108.216 98.4668 108.613 98.4668H109.707C112.35 98.4603 114.186 97.5586 115.215 95.7617C115.814 94.7135 116.113 93.444 116.113 91.9531C116.113 90.1367 115.612 88.6361 114.609 87.4512C114.108 86.8587 113.441 86.3965 112.607 86.0645C111.774 85.7259 110.814 85.5566 109.727 85.5566H108.223C108.171 85.5566 108.122 85.5762 108.076 85.6152C108.037 85.6543 108.018 85.7031 108.018 85.7617V98.1055ZM124.209 98.5059C124.209 98.5059 126.351 93.7109 130.635 84.1211C130.667 84.043 130.827 84.0039 131.113 84.0039C131.4 84.0039 131.563 84.043 131.602 84.1211L138.223 98.5059C138.477 99.0983 138.727 99.4531 138.975 99.5703C139.059 99.6094 139.102 99.6908 139.102 99.8145C139.102 99.9381 139.059 100 138.975 100H135.44C135.355 100 135.313 99.9447 135.313 99.834C135.313 99.7168 135.326 99.6484 135.352 99.6289C135.384 99.6029 135.426 99.5801 135.479 99.5605C135.531 99.5345 135.573 99.5052 135.606 99.4727C135.853 99.2253 135.977 98.9974 135.977 98.7891C135.977 98.5742 135.954 98.3984 135.908 98.2617L134.492 94.9121H127.451L126.065 98.2617C126.019 98.3984 125.996 98.5026 125.996 98.5742V98.6816C125.996 98.6881 125.996 98.6947 125.996 98.7012C125.996 98.9681 126.12 99.2253 126.367 99.4727C126.393 99.4987 126.449 99.5312 126.533 99.5703C126.618 99.6094 126.66 99.6908 126.66 99.8145C126.66 99.9381 126.618 100 126.533 100H123.457C123.372 100 123.33 99.9447 123.33 99.834C123.33 99.7168 123.343 99.6484 123.369 99.6289C123.402 99.6029 123.444 99.5768 123.496 99.5508C123.711 99.4596 123.949 99.1113 124.209 98.5059ZM128.145 93.3594C128.132 93.3789 128.128 93.4049 128.135 93.4375C128.141 93.4635 128.154 93.4766 128.174 93.4766H133.75C133.77 93.4766 133.783 93.4635 133.789 93.4375C133.796 93.4049 133.792 93.3789 133.779 93.3594L130.957 87.2266H130.889L128.145 93.3594ZM59.8731 111.922C59.4629 111.785 59.1407 111.717 58.9063 111.717C58.5547 111.717 58.2748 111.736 58.0665 111.775C57.8581 111.808 57.7442 111.808 57.7247 111.775C57.7051 111.743 57.6954 111.694 57.6954 111.629C57.6954 111.564 57.7182 111.495 57.7637 111.424C57.8093 111.352 57.8646 111.31 57.9297 111.297C58.8998 111.076 60.2279 110.965 61.9141 110.965L66.8165 118.973H66.9141L71.6016 110.965C73.2878 110.965 74.6159 111.076 75.586 111.297C75.7422 111.329 75.8204 111.45 75.8204 111.658C75.8204 111.775 75.7162 111.818 75.5079 111.785C75.2995 111.746 75.0228 111.727 74.6778 111.727C74.3327 111.727 73.9649 111.801 73.5743 111.951L75.4395 125.291C75.5307 125.988 75.7422 126.414 76.0743 126.57C76.1589 126.609 76.2012 126.691 76.2012 126.814C76.2012 126.938 76.1589 127 76.0743 127H72.8223C72.7377 127 72.6954 126.945 72.6954 126.834C72.6954 126.717 72.7084 126.648 72.7344 126.629C72.767 126.603 72.8093 126.577 72.8614 126.551C73.0307 126.479 73.1771 126.29 73.3008 125.984C73.431 125.672 73.4961 125.46 73.4961 125.35C73.4961 125.232 73.4929 125.154 73.4864 125.115L71.9141 113.514H71.8653L67.0411 121.951C67.0215 121.984 66.9011 121.997 66.6797 121.99C66.4649 121.984 66.351 121.971 66.3379 121.951L61.3087 113.514H61.2208L59.7852 125.115C59.7527 125.324 59.795 125.571 59.9122 125.857C60.0294 126.137 60.127 126.316 60.2051 126.395C60.2833 126.473 60.3646 126.531 60.4493 126.57C60.5339 126.609 60.5762 126.691 60.5762 126.814C60.5762 126.938 60.5339 127 60.4493 127H57.4708C57.3861 127 57.3438 126.945 57.3438 126.834C57.3438 126.717 57.3568 126.648 57.3829 126.629C57.4154 126.603 57.4577 126.577 57.5098 126.551C57.8158 126.421 58.0144 126.001 58.1055 125.291L59.8731 111.922ZM79.4239 112.713C79.4239 112.251 79.2611 111.857 78.9356 111.531C78.9096 111.505 78.8542 111.473 78.7696 111.434C78.685 111.395 78.6426 111.313 78.6426 111.189C78.6426 111.066 78.685 111.004 78.7696 111.004H82.0508C82.1355 111.004 82.1778 111.062 82.1778 111.18C82.1778 111.29 82.1615 111.359 82.129 111.385C82.1029 111.404 82.0639 111.427 82.0118 111.453C81.9597 111.473 81.8913 111.525 81.8067 111.609C81.7286 111.687 81.6439 111.837 81.5528 112.059C81.4616 112.273 81.4161 112.492 81.4161 112.713V120.809C81.4161 122.312 81.8783 123.481 82.8028 124.314C83.7338 125.141 84.8698 125.555 86.211 125.555C86.9988 125.555 87.7377 125.356 88.4278 124.959C89.1244 124.555 89.6745 124.025 90.0782 123.367C90.4883 122.703 90.6934 122 90.6934 121.258V112.713C90.6934 112.238 90.5372 111.844 90.2247 111.531C90.1986 111.505 90.1433 111.473 90.0586 111.434C89.974 111.395 89.9317 111.313 89.9317 111.189C89.9317 111.066 89.974 111.004 90.0586 111.004H93.1055C93.1902 111.004 93.2325 111.062 93.2325 111.18C93.2325 111.29 93.2162 111.359 93.1836 111.385C93.1576 111.404 93.1185 111.427 93.0665 111.453C93.0144 111.473 92.946 111.525 92.8614 111.609C92.7833 111.687 92.6986 111.837 92.6075 112.059C92.5163 112.273 92.4708 112.492 92.4708 112.713V121.258C92.4708 122.378 92.181 123.406 91.6016 124.344C91.0287 125.281 90.2572 126.017 89.2872 126.551C88.3236 127.085 87.2527 127.352 86.0743 127.352C84.9024 127.352 83.8054 127.078 82.7833 126.531C81.7676 125.984 80.9538 125.21 80.3419 124.207C79.7299 123.198 79.4239 122.065 79.4239 120.809V112.713ZM97.8809 126.883C97.6856 126.837 97.4708 126.779 97.2364 126.707C97.002 126.629 96.8523 126.59 96.7872 126.59H96.67C96.4421 126.59 96.2663 126.72 96.1426 126.98C96.1361 126.993 96.1296 127 96.1231 127H95.8399C95.8008 127 95.778 126.984 95.7715 126.951L94.9317 124.07C94.8991 123.934 94.9968 123.865 95.2247 123.865C95.3158 123.865 95.3777 123.885 95.4102 123.924C95.4428 123.956 95.4655 123.979 95.4786 123.992C95.4916 124.005 95.5209 124.051 95.5665 124.129C96.4258 125.19 97.6856 125.721 99.3458 125.721C100.218 125.721 100.941 125.493 101.514 125.037C102.093 124.575 102.383 123.898 102.383 123.006C102.383 122.407 102.285 121.961 102.09 121.668C101.901 121.368 101.745 121.144 101.621 120.994C101.361 120.675 100.736 120.236 99.7461 119.676C98.7631 119.116 97.9655 118.615 97.3536 118.172C95.7911 117.046 95.0098 115.887 95.0098 114.695C95.0098 113.504 95.3809 112.583 96.1231 111.932C96.8718 111.281 97.8614 110.955 99.0919 110.955C99.782 110.955 100.511 111.141 101.279 111.512C101.644 111.687 101.911 111.805 102.08 111.863C102.249 111.922 102.367 111.889 102.432 111.766C102.497 111.635 102.536 111.57 102.549 111.57C102.842 111.538 102.988 111.583 102.988 111.707L103.281 114.842C103.281 114.9 103.132 114.93 102.832 114.93C102.787 114.93 102.747 114.871 102.715 114.754C102.513 114.09 102.041 113.54 101.299 113.104C100.557 112.661 99.8145 112.439 99.0723 112.439C97.4968 112.439 96.709 113.09 96.709 114.393C96.709 115.337 97.5619 116.277 99.2676 117.215L101.123 118.211C102.262 118.842 103.06 119.526 103.516 120.262C103.978 120.991 104.209 121.772 104.209 122.605V122.703C104.046 123.823 103.851 124.585 103.623 124.988C103.245 125.652 102.708 126.186 102.012 126.59C101.315 126.987 100.524 127.186 99.6387 127.186C99.1504 127.166 98.7501 127.117 98.4376 127.039L97.8809 126.883ZM114.434 117.43C114.909 117.43 115.303 117.273 115.615 116.961C115.641 116.935 115.674 116.88 115.713 116.795C115.752 116.71 115.833 116.668 115.957 116.668C116.081 116.668 116.143 116.71 116.143 116.795V119.627C116.143 119.712 116.084 119.754 115.967 119.754C115.856 119.754 115.788 119.741 115.762 119.715C115.742 119.682 115.719 119.64 115.693 119.588C115.674 119.536 115.622 119.471 115.537 119.393C115.459 119.308 115.309 119.223 115.088 119.139C114.873 119.054 114.655 119.012 114.434 119.012H108.272V125.418H114.756C115.492 125.418 115.941 125.356 116.104 125.232C116.273 125.102 116.39 124.988 116.455 124.891C116.527 124.793 116.579 124.744 116.611 124.744C116.65 124.744 116.716 124.76 116.807 124.793C116.904 124.826 116.953 124.855 116.953 124.881C116.953 124.907 116.908 125.034 116.816 125.262L116.504 126.053C116.387 126.352 116.305 126.58 116.26 126.736C116.221 126.886 116.165 126.974 116.094 127H105.742C105.658 127 105.615 126.945 105.615 126.834C105.615 126.717 105.628 126.648 105.654 126.629C105.687 126.603 105.729 126.58 105.781 126.561C105.833 126.535 105.898 126.482 105.977 126.404C106.061 126.32 106.149 126.17 106.24 125.955C106.331 125.734 106.377 125.512 106.377 125.291V112.713C106.377 112.238 106.221 111.844 105.908 111.531C105.882 111.505 105.827 111.473 105.742 111.434C105.658 111.395 105.615 111.313 105.615 111.189C105.615 111.066 105.658 111.004 105.742 111.004H116.094C116.159 111.004 116.214 111.089 116.26 111.258C116.305 111.421 116.387 111.652 116.504 111.951L116.816 112.742C116.908 112.97 116.953 113.097 116.953 113.123C116.953 113.149 116.904 113.178 116.807 113.211C116.716 113.243 116.654 113.26 116.621 113.26C116.595 113.26 116.566 113.243 116.533 113.211C116.501 113.172 116.462 113.123 116.416 113.064C116.377 112.999 116.273 112.905 116.104 112.781C115.941 112.651 115.492 112.586 114.756 112.586H108.272V117.43H114.434ZM119.619 112.713C119.619 112.251 119.456 111.857 119.131 111.531C119.105 111.505 119.05 111.473 118.965 111.434C118.88 111.395 118.838 111.313 118.838 111.189C118.838 111.066 118.88 111.004 118.965 111.004H122.246C122.331 111.004 122.373 111.062 122.373 111.18C122.373 111.29 122.357 111.359 122.324 111.385C122.298 111.404 122.259 111.427 122.207 111.453C122.155 111.473 122.087 111.525 122.002 111.609C121.924 111.687 121.839 111.837 121.748 112.059C121.657 112.273 121.611 112.492 121.611 112.713V120.809C121.611 122.312 122.074 123.481 122.998 124.314C123.929 125.141 125.065 125.555 126.406 125.555C127.194 125.555 127.933 125.356 128.623 124.959C129.32 124.555 129.87 124.025 130.273 123.367C130.684 122.703 130.889 122 130.889 121.258V112.713C130.889 112.238 130.732 111.844 130.42 111.531C130.394 111.505 130.339 111.473 130.254 111.434C130.169 111.395 130.127 111.313 130.127 111.189C130.127 111.066 130.169 111.004 130.254 111.004H133.301C133.385 111.004 133.428 111.062 133.428 111.18C133.428 111.29 133.412 111.359 133.379 111.385C133.353 111.404 133.314 111.427 133.262 111.453C133.21 111.473 133.141 111.525 133.057 111.609C132.979 111.687 132.894 111.837 132.803 112.059C132.712 112.273 132.666 112.492 132.666 112.713V121.258C132.666 122.378 132.376 123.406 131.797 124.344C131.224 125.281 130.453 126.017 129.482 126.551C128.519 127.085 127.448 127.352 126.27 127.352C125.098 127.352 124.001 127.078 122.979 126.531C121.963 125.984 121.149 125.21 120.537 124.207C119.925 123.198 119.619 122.065 119.619 120.809V112.713ZM138.467 111.922C138.057 111.785 137.734 111.717 137.5 111.717C137.148 111.717 136.869 111.736 136.66 111.775C136.452 111.808 136.338 111.808 136.318 111.775C136.299 111.743 136.289 111.694 136.289 111.629C136.289 111.564 136.312 111.495 136.357 111.424C136.403 111.352 136.458 111.31 136.523 111.297C137.494 111.076 138.822 110.965 140.508 110.965L145.41 118.973H145.508L150.195 110.965C151.882 110.965 153.21 111.076 154.18 111.297C154.336 111.329 154.414 111.45 154.414 111.658C154.414 111.775 154.31 111.818 154.102 111.785C153.893 111.746 153.617 111.727 153.272 111.727C152.926 111.727 152.559 111.801 152.168 111.951L154.033 125.291C154.124 125.988 154.336 126.414 154.668 126.57C154.753 126.609 154.795 126.691 154.795 126.814C154.795 126.938 154.753 127 154.668 127H151.416C151.331 127 151.289 126.945 151.289 126.834C151.289 126.717 151.302 126.648 151.328 126.629C151.361 126.603 151.403 126.577 151.455 126.551C151.624 126.479 151.771 126.29 151.895 125.984C152.025 125.672 152.09 125.46 152.09 125.35C152.09 125.232 152.087 125.154 152.08 125.115L150.508 113.514H150.459L145.635 121.951C145.615 121.984 145.495 121.997 145.273 121.99C145.059 121.984 144.945 121.971 144.932 121.951L139.902 113.514H139.815L138.379 125.115C138.346 125.324 138.389 125.571 138.506 125.857C138.623 126.137 138.721 126.316 138.799 126.395C138.877 126.473 138.958 126.531 139.043 126.57C139.128 126.609 139.17 126.691 139.17 126.814C139.17 126.938 139.128 127 139.043 127H136.065C135.98 127 135.938 126.945 135.938 126.834C135.938 126.717 135.951 126.648 135.977 126.629C136.009 126.603 136.051 126.577 136.104 126.551C136.41 126.421 136.608 126.001 136.699 125.291L138.467 111.922Z"
              fill="#FDF3DE"
              stroke="none"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_160_611"
              x="-4"
              y="0"
              width="220.492"
              height="220.492"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_160_611"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_160_611"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="Inkpad_Div" style={{}}>
        <svg
          width="240"
          height="233"
          viewBox="0 0 240 233"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_di_519_45)">
            <rect
              y="123.419"
              width="200.465"
              height="133.174"
              rx="10"
              transform="rotate(-38 0 123.419)"
              fill="#4B4338"
            />
          </g>
          <g filter="url(#filter1_i_519_45)">
            <rect
              x="20.7534"
              y="126.864"
              width="170"
              height="100"
              transform="rotate(-38 20.7534 126.864)"
              fill="#499D7B"
            />
          </g>
          <defs>
            <filter
              id="filter0_di_519_45"
              x="0.0362549"
              y="4.03613"
              width="239.886"
              height="228.289"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_519_45"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_519_45"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_519_45"
              />
            </filter>
            <filter
              id="filter1_i_519_45"
              x="20.7534"
              y="20.2019"
              width="195.528"
              height="185.463"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_innerShadow_519_45"
              />
              <feOffset dy="-3" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.215686 0 0 0 0 0.513726 0 0 0 0 0.392157 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_519_45"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <HTMLFlipBook width={515} height={590}>
        <div className="demoPage">
          <img src={bookLeft} alt="Page 1" />
          <Draggable bounds="parent">
            <img
              src={stamp4}
              alt="stamp"
              style={{
                width: "13vw",
                height: "13vw",
                position: "absolute",
                left: "6vw",
                top: "24vh",
              }}
            />
          </Draggable>
          <Draggable bounds="parent">
            <img
              src={stamp2}
              alt="stamp"
              style={{
                width: "13vw",
                height: "13vw",
                position: "absolute",
                left: "3vw",
                top: "4vh",
              }}
            />
          </Draggable>
          <Draggable bounds="parent">
            <img
              src={stamp5}
              alt="stamp"
              style={{
                width: "13vw",
                height: "13vw",
                position: "absolute",
                left: "13vw",
                top: "42vh",
              }}
            />
          </Draggable>
          <Draggable bounds="parent">
            <img
              src={stamp3}
              alt="stamp"
              style={{
                width: "12vw",
                height: "12vw",
                position: "absolute",
                left: "18vw",
                top: "2vh",
              }}
            />
          </Draggable>
          <Draggable bounds="parent">
            <img
              src={stamp7}
              alt="stamp"
              style={{
                width: "12vw",
                height: "12vw",
                position: "absolute",
                left: "18vw",
                top: "28vh",
              }}
            />
          </Draggable>
        </div>
        <div className="demoPage">
          <img src={bookRight} alt="Page 2" />
          <Draggable bounds="parent">
            <img
              src={stamp1}
              alt="stamp"
              style={{
                width: "12vw",
                height: "12vw",
                position: "absolute",
                left: "2vw",
                top: "3vh",
              }}
            />
          </Draggable>
          <Draggable bounds="parent">
            <img
              src={stamp6}
              alt="stamp"
              style={{
                width: "12vw",
                height: "12vw",
                position: "absolute",
                left: "10vw",
                top: "20vh",
              }}
            />
          </Draggable>
        </div>
        <div className="demoPage">
          <img src={bookLeft} alt="Page 3" />
        </div>
        <div className="demoPage">
          <img src={bookRight} alt="Page 4" />
          <p></p>
        </div>
      </HTMLFlipBook>
      {showForm && <MuseumForm />}
    </div>
  );
}

export default MyBook;
