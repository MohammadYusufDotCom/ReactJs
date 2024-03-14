import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Img(prop) {
  let { id, refresh, setRefresh } = prop;

  const navigate = useNavigate();

  async function deleteItem(itemId) {
    console.log(itemId);
    let result = await fetch(`http://localhost:5000/deleteproduct/${itemId}`, {
      method: "Delete",
      headers: { "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem('auth'))
    },
    });
    result = await result.json();
    console.log(result.status);

    setRefresh(!refresh);
  }

  function modify() {
    navigate(`/updateproduct/${id}`);
  }
  return (
    <div className=" flex gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="8 14 56 40"
        width="20px"
        height="20px"
        onClick={(e) => deleteItem(id)}
        className="cursor-pointer"
      >
        <radialGradient
          id="SrYuS0MYDGH9m0SRC6_noa"
          cx="31.417"
          cy="-1098.083"
          r="28.77"
          gradientTransform="translate(0 1128)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f4e09d" />
          <stop offset=".226" stop-color="#f8e8b5" />
          <stop offset=".513" stop-color="#fcf0cd" />
          <stop offset=".778" stop-color="#fef4dc" />
          <stop offset="1" stop-color="#fff6e1" />
        </radialGradient>
        <radialGradient
          id="SrYuS0MYDGH9m0SRC6_nob"
          cx="31.5"
          cy="-1096"
          r="31.751"
          gradientTransform="translate(0 1128)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f4e09d" />
          <stop offset=".226" stop-color="#f8e8b5" />
          <stop offset=".513" stop-color="#fcf0cd" />
          <stop offset=".778" stop-color="#fef4dc" />
          <stop offset="1" stop-color="#fff6e1" />
        </radialGradient>
        <g>
          <linearGradient
            id="SrYuS0MYDGH9m0SRC6_noc"
            x1="32"
            x2="32"
            y1="53"
            y2="8"
            gradientTransform="matrix(1 0 0 -1 0 64)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#def9ff" />
            <stop offset=".282" stop-color="#cff6ff" />
            <stop offset=".823" stop-color="#a7efff" />
            <stop offset="1" stop-color="#99ecff" />
          </linearGradient>
          <path
            fill="url(#SrYuS0MYDGH9m0SRC6_noc)"
            d="M15.211,11h33.578c3.024,0,5.356,2.663,4.956,5.661l-4.667,35 C48.747,54.145,46.628,56,44.122,56H19.878c-2.506,0-4.625-1.855-4.956-4.339l-4.667-35C9.855,13.663,12.187,11,15.211,11z"
          />
          <linearGradient
            id="SrYuS0MYDGH9m0SRC6_nod"
            x1="32"
            x2="32"
            y1="46"
            y2="56"
            gradientTransform="matrix(1 0 0 -1 0 64)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#41bfec" />
            <stop offset=".232" stop-color="#4cc5ef" />
            <stop offset=".644" stop-color="#6bd4f6" />
            <stop offset="1" stop-color="#8ae4fd" />
          </linearGradient>
          <path
            fill="url(#SrYuS0MYDGH9m0SRC6_nod)"
            d="M53,18H11c-1.105,0-2-0.895-2-2v-6c0-1.105,0.895-2,2-2h42c1.105,0,2,0.895,2,2v6 C55,17.105,54.105,18,53,18z"
          />
        </g>
        <g>
          <linearGradient
            id="SrYuS0MYDGH9m0SRC6_noe"
            x1="52"
            x2="52"
            y1="-1064"
            y2="-1088"
            gradientTransform="translate(0 1128)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ff5840" />
            <stop offset=".007" stop-color="#ff5840" />
            <stop offset=".989" stop-color="#fa528c" />
            <stop offset="1" stop-color="#fa528c" />
          </linearGradient>
          <path
            fill="url(#SrYuS0MYDGH9m0SRC6_noe)"
            d="M52,40c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S58.627,40,52,40z"
          />
          <path
            fill="#fff"
            d="M57.417,49.412l-8.005,8.005c-0.778,0.778-2.051,0.778-2.828,0l0,0 c-0.778-0.778-0.778-2.051,0-2.828l8.005-8.005c0.778-0.778,2.051-0.778,2.828,0l0,0C58.194,47.361,58.194,48.634,57.417,49.412z"
          />
          <path
            fill="#fff"
            d="M46.583,49.412l8.005,8.005c0.778,0.778,2.051,0.778,2.828,0l0,0c0.778-0.778,0.778-2.051,0-2.828 l-8.005-8.005c-0.778-0.778-2.051-0.778-2.828,0l0,0C45.806,47.361,45.806,48.634,46.583,49.412z"
          />
        </g>
      </svg>
      
      
      
      {/* this is SEcond Icon for Updation of an existing product  */}
      <svg
        height="22px"
        version="1.1"
        viewBox="0 0 32 32"
        width="23px"
        className="cursor-pointer"
        onClick={modify}
      >
        <title />
        <desc />
        <defs />
        <g
          fill="none"
          fill-rule="evenodd"
          id="Page-1"
          stroke="none"
          stroke-width="1"
        >
          <g fill="url(#SrYuS0MYDGH9m0SRC6_nod)" id="icon-136-document-edit">
            <path
              d="M26.4432278,12.1503345 L15.1570131,23.4499064 L15.1570131,23.4499064 L12.5514465,20.8443397 L23.8435383,9.55064513 L26.4432278,12.1503345 L26.4432278,12.1503345 Z M27.1499164,11.4428096 L28.8790954,9.71158405 C29.269069,9.32114892 29.266195,8.68650423 28.8743,8.29568497 L27.6944866,7.11910998 C27.3018646,6.72756564 26.6692577,6.72452466 26.2779126,7.11592531 L24.5505949,8.84348817 L27.1499164,11.4428096 L27.1499164,11.4428096 Z M11.9037061,21.6108129 L11.2641602,24.7235103 L14.3990645,24.1061713 L11.9037061,21.6108129 L11.9037061,21.6108129 L11.9037061,21.6108129 Z M22,18 L22,28.0025781 C22,29.1090746 21.1057238,30 20.0025781,30 L4.99742191,30 C3.89092539,30 3,29.1012878 3,27.9926701 L3,5.00732994 C3,3.89833832 3.8992496,3 5.0085302,3 L15,3 L15,9.00189865 C15,10.1132936 15.8980806,11 17.0059191,11 L21,11 L25.5801067,6.41989327 C26.372781,5.62721897 27.6313906,5.6313906 28.4102504,6.41025036 L29.5897496,7.58974962 C30.3661881,8.36618809 30.3642921,9.63570785 29.5801067,10.4198932 L22,18 L22,18 Z M16,3 L16,8.99707067 C16,9.55097324 16.4509752,10 16.990778,10 L22,10 L16,3 L16,3 Z"
              id="document-edit"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Img;
