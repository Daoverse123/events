import React from "react";

function Footer() {
  return (
    <div className="flex max-[1200px]:flex-col max-[1200px]:items-start max-[1200px]:justify-start max-[1200px]:px-[29px] justify-between h-[110px] w-full  top-0 bg-[#FAFAFA] px-[120px] items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="145"
        height="49"
        fill="none"
        viewBox="0 0 145 49"
        className="cursor-pointer"
        onClick={() => {
          location.href = "/";
        }}
      >
        <mask
          id="path-1-outside-1_12050_35836"
          width="60"
          height="23"
          x="21.337"
          y="13.771"
          fill="#000"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M21.337 13.771H81.337V36.771H21.337z"></path>
          <path d="M24.164 35.771h-2.108V25.606c0-3.842 2.21-6.562 6.018-6.562 1.02 0 2.006.204 2.856.612v2.142a5.295 5.295 0 00-2.686-.714c-2.516 0-4.08 1.802-4.08 4.624V35.77zm17.628-1.666c3.604 0 5.678-3.094 5.678-6.63v-8.193h2.108v8.431c0 4.76-2.924 8.398-7.786 8.398-4.794 0-7.684-3.672-7.684-8.431v-8.398h2.108v8.227c0 3.502 2.006 6.596 5.576 6.596zm19.897 2.04c-3.502 0-5.542-2.278-5.542-5.78v-9.18h-3.502v-1.903h3.502v-4.386h2.108v4.386h6.732v1.904h-6.732v9.111c0 2.448 1.428 3.876 3.604 3.876 1.19 0 2.312-.442 3.128-1.122v2.04c-.85.646-2.074 1.054-3.298 1.054zm13.386-.068c-2.788 0-5.1-1.19-6.324-3.604l1.734-.952c.986 1.904 2.516 2.584 4.522 2.584 2.21 0 4.046-.952 4.046-2.856 0-4.147-9.792-1.258-9.792-7.513 0-2.754 2.516-4.692 5.678-4.692 2.686 0 4.726 1.156 5.814 3.128l-1.734.986c-.884-1.666-2.312-2.142-4.046-2.142-1.836 0-3.604.986-3.604 2.686 0 4.011 9.792 1.258 9.792 7.513 0 2.992-2.822 4.862-6.086 4.862z"></path>
        </mask>
        <path
          fill="#000"
          d="M24.164 35.771h-2.108V25.606c0-3.842 2.21-6.562 6.018-6.562 1.02 0 2.006.204 2.856.612v2.142a5.295 5.295 0 00-2.686-.714c-2.516 0-4.08 1.802-4.08 4.624V35.77zm17.628-1.666c3.604 0 5.678-3.094 5.678-6.63v-8.193h2.108v8.431c0 4.76-2.924 8.398-7.786 8.398-4.794 0-7.684-3.672-7.684-8.431v-8.398h2.108v8.227c0 3.502 2.006 6.596 5.576 6.596zm19.897 2.04c-3.502 0-5.542-2.278-5.542-5.78v-9.18h-3.502v-1.903h3.502v-4.386h2.108v4.386h6.732v1.904h-6.732v9.111c0 2.448 1.428 3.876 3.604 3.876 1.19 0 2.312-.442 3.128-1.122v2.04c-.85.646-2.074 1.054-3.298 1.054zm13.386-.068c-2.788 0-5.1-1.19-6.324-3.604l1.734-.952c.986 1.904 2.516 2.584 4.522 2.584 2.21 0 4.046-.952 4.046-2.856 0-4.147-9.792-1.258-9.792-7.513 0-2.754 2.516-4.692 5.678-4.692 2.686 0 4.726 1.156 5.814 3.128l-1.734.986c-.884-1.666-2.312-2.142-4.046-2.142-1.836 0-3.604.986-3.604 2.686 0 4.011 9.792 1.258 9.792 7.513 0 2.992-2.822 4.862-6.086 4.862z"
        ></path>
        <path
          fill="#000"
          d="M24.164 35.771v.148h.148v-.148h-.148zm-2.108 0h-.147v.148h.148v-.148zm8.874-16.115h.148v-.093l-.084-.04-.064.133zm0 2.142l-.074.127.222.13v-.257h-.148zm-6.766 13.825h-2.108v.296h2.108v-.296zm-1.96.148V25.606h-.295V35.77h.295zm0-10.165c0-1.894.544-3.497 1.544-4.624.997-1.125 2.46-1.79 4.326-1.79v-.296c-1.941 0-3.488.695-4.547 1.89-1.058 1.193-1.618 2.871-1.618 4.82h.295zm5.87-6.414c1.001 0 1.965.2 2.792.597l.128-.266c-.873-.419-1.88-.627-2.92-.627v.296zm2.708.464v2.142h.296v-2.142h-.296zm.222 2.014a5.442 5.442 0 00-2.76-.734v.296c.927 0 1.82.231 2.612.693l.148-.255zm-2.76-.734c-1.295 0-2.357.465-3.094 1.304-.735.837-1.133 2.03-1.133 3.468h.295c0-1.385.383-2.503 1.06-3.273.674-.768 1.652-1.203 2.872-1.203v-.296zm-4.227 4.772V35.77h.295V25.708h-.295zm23.453-6.426v-.148h-.148v.148h.148zm2.108 0h.147v-.148h-.147v.148zm-15.47 0v-.148h-.147v.148h.148zm2.108 0h.148v-.148h-.148v.148zm5.576 14.97c1.849 0 3.31-.795 4.306-2.044.993-1.246 1.52-2.937 1.52-4.732h-.296c0 1.74-.51 3.363-1.455 4.548-.942 1.182-2.32 1.934-4.075 1.934v.295zm5.825-6.777v-8.193h-.295v8.194h.295zm-.147-8.045h2.108v-.296H47.47v.296zm1.96-.148v8.431h.295v-8.431h-.295zm0 8.431c0 2.35-.722 4.413-2.032 5.886-1.31 1.47-3.215 2.364-5.606 2.364v.296c2.47 0 4.458-.926 5.826-2.464 1.367-1.536 2.107-3.672 2.107-6.082h-.295zm-7.638 8.25c-2.356 0-4.236-.9-5.528-2.38-1.294-1.481-2.008-3.553-2.008-5.903h-.295c0 2.408.731 4.553 2.08 6.097 1.352 1.547 3.314 2.482 5.751 2.482v-.296zm-7.536-8.284v-8.397h-.295v8.398h.295zm-.148-8.25h2.108v-.295h-2.108v.296zm1.96-.147v8.227h.296v-8.227h-.295zm0 8.227c0 1.778.51 3.46 1.481 4.702.975 1.246 2.41 2.042 4.243 2.042v-.295c-1.737 0-3.09-.751-4.01-1.928-.924-1.181-1.418-2.796-1.418-4.52h-.295zm20.08-6.323h.147v-.148h-.148v.148zm-3.503 0h-.147v.148h.147v-.148zm0-1.904v-.148h-.147v.148h.147zm3.502 0v.148h.148v-.148h-.148zm0-4.386v-.147H56v.147h.147zm2.108 0h.148v-.147h-.148v.147zm0 4.386h-.148v.148h.148v-.148zm6.732 0h.147v-.148h-.147v.148zm0 1.904v.148h.147v-.148h-.147zm-6.732 0v-.148h-.148v.148h.148zm6.732 11.865h.147v-.315l-.242.202.095.113zm0 2.04l.089.117.058-.044v-.073h-.147zm-3.298.906c-1.718 0-3.062-.557-3.977-1.53-.916-.974-1.417-2.379-1.417-4.102H56c0 1.78.518 3.264 1.497 4.305.98 1.041 2.408 1.623 4.192 1.623v-.296zm-5.394-5.632v-9.18H56v9.18h.295zm-.148-9.327h-3.502v.296h3.502v-.296zm-3.354.148v-1.904h-.295v1.904h.295zm-.148-1.756h3.502v-.296h-3.502v.296zm3.65-.148v-4.386H56v4.386h.295zm-.148-4.238h2.108v-.295h-2.108v.295zm1.96-.148v4.386h.296v-4.386h-.296zm.148 4.534h6.732v-.296h-6.732v.296zm6.584-.148v1.904h.295v-1.904h-.295zm.148 1.756h-6.732v.296h6.732v-.296zm-6.88.148v9.111h.296v-9.111h-.296zm0 9.111c0 1.253.366 2.261 1.027 2.958.661.697 1.604 1.066 2.725 1.066v-.295c-1.055 0-1.915-.346-2.511-.974-.597-.63-.945-1.56-.945-2.755h-.296zm3.752 4.024a5.09 5.09 0 003.222-1.157l-.189-.226a4.796 4.796 0 01-3.033 1.087v.296zm2.98-1.27v2.04h.295v-2.04h-.295zm.058 1.922c-.822.626-2.014 1.024-3.208 1.024v.296c1.253 0 2.51-.417 3.387-1.084l-.179-.236zm3.854-2.5l-.07-.13-.126.07.065.127.131-.067zm1.734-.952l.131-.068-.07-.134-.132.073.071.13zm10.268-9.35l.073.13.126-.073-.07-.128-.13.072zm-1.734.987l-.13.069.07.134.133-.075-.073-.128zm-3.944 12.771c-2.743 0-4.998-1.167-6.192-3.523l-.263.134c1.253 2.472 3.622 3.685 6.455 3.685v-.296zm-6.253-3.326l1.734-.952-.142-.26-1.734.953.142.259zm1.532-1.014c.505.975 1.154 1.644 1.94 2.068.784.423 1.694.596 2.713.596v-.295c-.987 0-1.845-.168-2.573-.56-.727-.393-1.336-1.015-1.818-1.945l-.262.136zm4.653 2.664c1.123 0 2.165-.242 2.932-.738.772-.5 1.261-1.258 1.261-2.266h-.295c0 .896-.428 1.566-1.127 2.018-.704.456-1.684.69-2.771.69v.296zm4.193-3.004c0-.55-.163-.992-.453-1.35-.288-.355-.693-.618-1.164-.829-.935-.417-2.181-.645-3.392-.93-1.224-.29-2.421-.64-3.312-1.294-.88-.645-1.47-1.593-1.47-3.11h-.295c0 1.61.634 2.647 1.59 3.348.945.694 2.196 1.054 3.42 1.343 1.236.292 2.438.51 3.339.913.447.2.807.44 1.054.745.246.302.388.678.388 1.164h.295zm-9.791-7.513c0-2.645 2.419-4.544 5.53-4.544v-.296c-3.213 0-5.825 1.977-5.825 4.84h.295zm5.53-4.544c2.64 0 4.626 1.133 5.684 3.051l.259-.142c-1.118-2.026-3.211-3.205-5.943-3.205v.296zm5.74 2.852l-1.733.985.146.257 1.734-.986-.146-.256zm-1.53 1.045c-.456-.86-1.056-1.418-1.77-1.76-.712-.34-1.527-.46-2.406-.46v.294c.855 0 1.62.118 2.278.432.654.313 1.21.825 1.637 1.632l.261-.138zm-4.176-2.22c-.942 0-1.873.252-2.574.73-.703.481-1.177 1.195-1.177 2.103h.295c0-.792.41-1.422 1.049-1.859.643-.44 1.513-.68 2.407-.68v-.295zm-3.751 2.833c0 .534.164.964.455 1.312.287.345.693.603 1.163.81.933.41 2.18.642 3.39.936 1.224.298 2.421.66 3.313 1.325.88.656 1.47 1.613 1.47 3.13h.295c0-1.61-.634-2.655-1.59-3.367-.943-.704-2.194-1.077-3.418-1.374-1.238-.301-2.44-.524-3.341-.92-.448-.198-.808-.432-1.056-.729-.245-.293-.386-.655-.386-1.123h-.295zm9.791 7.513c0 1.445-.68 2.618-1.76 3.435-1.084.82-2.573 1.28-4.178 1.28v.295c1.658 0 3.213-.475 4.356-1.34 1.146-.865 1.877-2.122 1.877-3.67h-.295z"
          mask="url(#path-1-outside-1_12050_35836)"
        ></path>
        <path
          fill="#000"
          fillRule="evenodd"
          d="M2.489 13.83a.356.356 0 00-.356.356v2.166c0 .197.16.356.356.356h5.689c.589 0 1.066.479 1.066 1.07 0 .59-.477 1.068-1.066 1.068h-5.69A2.492 2.492 0 010 16.352v-2.166a2.492 2.492 0 012.489-2.495h16.497a2.492 2.492 0 012.49 2.495v2.166a2.492 2.492 0 01-2.49 2.494h-4.679v14.41a2.492 2.492 0 01-2.489 2.493H9.77a2.492 2.492 0 01-2.488-2.494V21.61a1.068 1.068 0 112.133 0v11.646c0 .197.16.357.355.357h2.048c.197 0 .356-.16.356-.357V17.863c0-.238.077-.457.208-.635.186-.311.527-.52.915-.52h5.69c.196 0 .355-.16.355-.356v-2.166a.356.356 0 00-.356-.357H2.49z"
          clipRule="evenodd"
        ></path>
        <g clipPath="url(#clip0_12050_35836)">
          <path
            fill="#000"
            d="M92.354 23.915l-1.335-.195v-.814h8.284l.228 2.523h-.928l-.472-1.579-4.036-.097v4.59l2.718-.05.228-1.35h.895v3.743h-.895l-.228-1.4-2.718-.049v4.85l4.59-.163.862-2.05.96.293-.472 2.831h-9.032v-.797l1.35-.163V23.915zm8.485 2.051h3.775v.765l-1.155.211 1.644 4.688.683 2.066.586-2.001 1.644-4.753-1.107-.211v-.765h3.304v.765l-.846.211-3.141 8.187h-1.384l-3.271-8.186-.732-.212v-.765zm14.002 9.211c-1.313 0-2.317-.428-3.011-1.285-.684-.858-1.025-2.002-1.025-3.434 0-.944.179-1.774.537-2.49.358-.716.857-1.27 1.497-1.66.651-.39 1.389-.586 2.213-.586 1.009 0 1.79.282 2.344.846.564.553.862 1.35.895 2.392 0 .662-.038 1.167-.114 1.514h-5.599c.022 1.074.272 1.942.749 2.604.477.65 1.156.976 2.034.976.434 0 .885-.076 1.351-.227.477-.163.846-.353 1.107-.57l.309.716c-.315.325-.781.608-1.4.846a5.198 5.198 0 01-1.887.358zm1.66-5.566c.032-.227.048-.46.048-.7-.01-.705-.162-1.258-.455-1.66-.282-.412-.733-.618-1.351-.618-.629 0-1.134.228-1.514.684-.368.456-.58 1.22-.634 2.294h3.906zm4.165-2.392l-1.172-.293v-.879l2.327-.293h.049l.342.293v.684l-.016.39c.39-.347.906-.661 1.546-.943.64-.283 1.253-.424 1.839-.424.683 0 1.21.13 1.578.391.38.26.646.662.798 1.204.152.532.228 1.253.228 2.165v4.557l1.139.114v.813h-3.857v-.797l1.009-.13v-4.573c0-.64-.044-1.14-.13-1.498-.087-.369-.25-.64-.489-.813-.238-.185-.585-.277-1.041-.277-.391 0-.808.098-1.253.293a5.957 5.957 0 00-1.188.683v6.168l1.106.147v.797h-3.84v-.797l1.025-.147V27.22zm12.614 7.942c-.619 0-1.08-.141-1.384-.423-.304-.282-.455-.765-.455-1.449V27.04h-1.172v-.732c.054-.011.206-.05.455-.114.25-.065.418-.125.505-.18.174-.097.309-.292.407-.585.087-.206.19-.537.309-.993l.212-.814h.96l.032 2.344h2.718v1.074h-2.718v4.996c0 .619.017 1.053.049 1.302.044.25.125.413.244.489.131.076.348.114.651.114.293 0 .613-.038.96-.114a4.33 4.33 0 00.83-.245l.245.733c-.261.195-.684.385-1.27.57-.575.184-1.101.276-1.578.276zm5.358-1.465c.108.163.336.31.683.44.358.13.732.195 1.123.195.618 0 1.074-.12 1.367-.358.293-.239.439-.57.439-.993 0-.293-.092-.548-.276-.765-.185-.217-.445-.407-.781-.57-.326-.173-.798-.379-1.416-.618-.836-.314-1.449-.689-1.839-1.123-.38-.444-.57-1.025-.57-1.741 0-.477.141-.895.423-1.253.293-.358.689-.635 1.188-.83a4.478 4.478 0 011.693-.31c.499 0 .933.039 1.302.115.38.076.683.151.911.227.228.076.38.125.456.147v2.018h-.993l-.325-1.204c-.065-.13-.239-.239-.521-.326a2.872 2.872 0 00-.944-.146c-.488 0-.884.108-1.188.325-.293.217-.44.51-.44.879 0 .326.076.597.228.814.163.206.364.374.602.504.239.13.565.282.977.456l.325.13c.608.239 1.102.467 1.481.684.38.217.695.504.944.862.261.347.391.776.391 1.286 0 .803-.315 1.443-.944 1.92-.618.478-1.47.716-2.555.716-.532 0-1.09-.07-1.676-.211a11.587 11.587 0 01-1.416-.456v-2.083h1.058l.293 1.27z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_12050_35836">
            <path
              fill="#fff"
              d="M0 0H57.123V47.521H0z"
              transform="translate(87.877 .771)"
            ></path>
          </clipPath>
        </defs>
      </svg>
      <ul className="flex gap-[40px] max-[1200px]:gap-[12px]">
        {["home", "discover", "Add Events"].map((ele) => {
          return (
            <li
              onClick={() => {
                location.href = `/${ele}`;
              }}
              className="max-[1200px]:text-[10px] cursor-pointer capitalize"
              key={"nav" + ele}
            >
              {ele}
            </li>
          );
        })}
      </ul>
      <span className="flex items-center gap-[42px] max-[1200px]:gap-[20px]  max-[1200px]:mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="none"
          viewBox="0 0 25 25"
          className="max-[1200px]:w-3 cursor-pointer"
          onClick={() => {
            window.open("https://twitter.truts.xyz/", "_blank");
          }}
        >
          <g clipPath="url(#clip0_11374_32648)">
            <path
              fill="#121212"
              d="M8.503 22.552c9.055 0 14.008-7.504 14.008-14.009 0-.21-.004-.426-.014-.637a9.999 9.999 0 002.456-2.55c-.897.4-1.85.66-2.826.774a4.95 4.95 0 002.165-2.723 9.898 9.898 0 01-3.125 1.195 4.93 4.93 0 00-8.394 4.49A13.985 13.985 0 012.626 3.95a4.93 4.93 0 001.524 6.57 4.93 4.93 0 01-2.231-.614v.061a4.922 4.922 0 003.95 4.829 4.895 4.895 0 01-2.221.084 4.934 4.934 0 004.597 3.422A9.875 9.875 0 01.953 20.34a13.968 13.968 0 007.55 2.212z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_11374_32648">
              <path
                fill="#fff"
                d="M0 0H24V24H0z"
                transform="translate(.953 .805)"
              ></path>
            </clipPath>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="19"
          fill="none"
          viewBox="0 0 25 19"
          className="max-[1200px]:w-3 cursor-pointer"
          onClick={() => {
            window.open("https://discord.truts.xyz/", "_blank");
          }}
        >
          <path
            fill="#121212"
            d="M21.27 1.958A19.79 19.79 0 0016.385.443a.074.074 0 00-.079.037c-.21.375-.444.865-.608 1.25a18.272 18.272 0 00-5.487 0A12.628 12.628 0 009.594.48a.077.077 0 00-.079-.037A19.736 19.736 0 004.63 1.958a.07.07 0 00-.032.027C1.487 6.634.634 11.168 1.052 15.645a.082.082 0 00.032.057 19.902 19.902 0 005.992 3.03.077.077 0 00.085-.028 14.22 14.22 0 001.226-1.995c.02-.04 0-.089-.042-.105a13.109 13.109 0 01-1.872-.893.077.077 0 01-.008-.127c.126-.094.252-.192.372-.291a.074.074 0 01.078-.011c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 01.079.01c.12.099.246.198.372.292.044.032.041.1-.006.127-.598.35-1.22.645-1.873.892a.077.077 0 00-.041.106c.36.699.772 1.363 1.225 1.994a.076.076 0 00.084.028 19.837 19.837 0 006.003-3.029.077.077 0 00.03-.055c.501-5.177-.837-9.674-3.548-13.66a.06.06 0 00-.03-.03zM8.973 12.919c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="none"
          viewBox="0 0 25 25"
          className="max-[1200px]:w-3 cursor-pointer"
          onClick={() => {
            window.open("https://truts.xyz/", "_blank");
          }}
        >
          <g clipPath="url(#clip0_11374_32650)">
            <path
              fill="#121212"
              d="M12.953 1.18c-6.41 0-11.625 5.215-11.625 11.625S6.543 24.43 12.953 24.43s11.625-5.215 11.625-11.625S19.363 1.18 12.953 1.18zm4.99 13.97c.064-.774.1-1.56.1-2.345 0-.786-.036-1.572-.1-2.345 2.863.623 4.385 1.692 4.385 2.345 0 .652-1.522 1.721-4.385 2.345zm-4.99 7.03c-.652 0-1.721-1.523-2.345-4.386.774.065 1.56.1 2.345.1.786 0 1.572-.035 2.345-.1-.623 2.863-1.692 4.386-2.345 4.386zm0-6.536c-.975 0-1.87-.053-2.701-.138a26.288 26.288 0 010-5.403 26.32 26.32 0 015.402 0 26.292 26.292 0 010 5.403c-.83.085-1.726.138-2.7.138zm-9.375-2.84c0-.652 1.522-1.721 4.386-2.344-.065.773-.1 1.559-.1 2.345 0 .786.035 1.571.1 2.345-2.864-.624-4.386-1.693-4.386-2.345zm9.375-9.374c.653 0 1.722 1.522 2.345 4.385-.773-.064-1.56-.1-2.345-.1-.786 0-1.571.036-2.345.1.623-2.863 1.693-4.385 2.345-4.385zm8.696 5.888c-1.127-.532-2.508-.93-4.01-1.199-.268-1.502-.667-2.884-1.2-4.01a9.417 9.417 0 015.21 5.21zM9.467 4.11c-.533 1.126-.931 2.508-1.2 4.01-1.502.268-2.883.667-4.01 1.2a9.417 9.417 0 015.21-5.21zm-5.21 12.182c1.127.533 2.508.931 4.01 1.2.269 1.502.667 2.883 1.2 4.01a9.417 9.417 0 01-5.21-5.21zm12.183 5.21c.532-1.127.93-2.508 1.199-4.01 1.502-.269 2.883-.667 4.01-1.2a9.417 9.417 0 01-5.21 5.21z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_11374_32650">
              <path
                fill="#fff"
                d="M0 0H24V24H0z"
                transform="translate(.953 .805)"
              ></path>
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
  );
}

export default Footer;
