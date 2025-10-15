interface IconpropsType {
  width?: string;
  height?: string;
  type: string;
}

type IconProps = Omit<IconpropsType, "type">;

const Notification = () => {
  return (
    <svg
      width="51"
      height="50"
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.904 6.0625C19.0082 6.0625 13.404 11.6667 13.404 18.5625V24.5833C13.404 25.8542 12.8624 27.7917 12.2165 28.875L9.8207 32.8542C8.34153 35.3125 9.36237 38.0417 12.0707 38.9583C21.0499 41.9583 30.7374 41.9583 39.7165 38.9583C42.2374 38.125 43.3415 35.1458 41.9665 32.8542L39.5707 28.875C38.9457 27.7917 38.404 25.8542 38.404 24.5833V18.5625C38.404 11.6875 32.779 6.0625 25.904 6.0625Z"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M29.7581 6.66675C29.1123 6.47925 28.4456 6.33341 27.7581 6.25008C25.7581 6.00008 23.8415 6.14591 22.0498 6.66675C22.654 5.12508 24.154 4.04175 25.904 4.04175C27.654 4.04175 29.154 5.12508 29.7581 6.66675Z"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.1543 39.7083C32.1543 43.1458 29.3418 45.9583 25.9043 45.9583C24.196 45.9583 22.6126 45.2499 21.4876 44.1249C20.3626 42.9999 19.6543 41.4166 19.6543 39.7083"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

const Messsage = () => {
  return (
    <svg
      width="51"
      height="50"
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.2793 42.7084H15.446C9.19596 42.7084 5.0293 39.5834 5.0293 32.2917V17.7084C5.0293 10.4167 9.19596 7.29175 15.446 7.29175H36.2793C42.5293 7.29175 46.696 10.4167 46.696 17.7084V32.2917C46.696 39.5834 42.5293 42.7084 36.2793 42.7084Z"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.2786 18.75L29.7578 23.9583C27.612 25.6667 24.0911 25.6667 21.9453 23.9583L15.4453 18.75"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Search = () => {
  return (
    <svg
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="26.1609"
        y1="26.1023"
        x2="42.3678"
        y2="42.3093"
        stroke="white"
        strokeWidth="1.43003"
      />
      <path
        d="M15.7932 29.7859C23.9633 29.7859 30.5864 23.3834 30.5864 15.4856C30.5864 7.58775 23.9633 1.1853 15.7932 1.1853C7.62315 1.1853 1 7.58775 1 15.4856C1 23.3834 7.62315 29.7859 15.7932 29.7859Z"
        stroke="white"
        stroke-width="1.43003"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Arrowdown = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width ? width : "33"}
      height={height ? height : "26"}
      viewBox="0 0 33 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4995 6.75H20.1708C24.722 6.75 26.592 9.19792 24.3095 12.1875L22.467 14.5937L20.6245 17C18.342 19.9896 14.6158 19.9896 12.3333 17L10.4908 14.5937L8.64827 12.1875C6.40702 9.19792 8.26327 6.75 12.8283 6.75H16.4995Z"
        fill="white"
      />
    </svg>
  );
};

const Edit = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5752 4.50003L6.31268 15.3625C5.92518 15.775 5.55018 16.5875 5.47518 17.15L5.01268 21.2C4.85018 22.6625 5.90018 23.6625 7.35018 23.4125L11.3752 22.725C11.9377 22.625 12.7252 22.2125 13.1127 21.7875L23.3752 10.925C25.1502 9.05003 25.9502 6.91253 23.1877 4.30003C20.4377 1.71253 18.3502 2.62503 16.5752 4.50003Z"
        stroke="#DF8F8C"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.8623 6.3125C15.3998 9.7625 18.1998 12.4 21.6748 12.75"
        stroke="#DF8F8C"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.75 27.5H26.25"
        stroke="#DF8F8C"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Delete = () => {
  return(
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 6.47998C17.67 6.14998 14.32 5.97998 10.98 5.97998C9 5.97998 7.02 6.07998 5.04 6.27998L3 6.47998" stroke="#13669D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 5.47L8.72 4.16C8.88 3.21 9 2.5 10.69 2.5H13.31C15 2.5 15.13 3.25 15.28 4.17L15.5 5.47" stroke="#13669D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.8504 9.63989L18.2004 19.7099C18.0904 21.2799 18.0004 22.4999 15.2104 22.4999H8.79039C6.00039 22.4999 5.91039 21.2799 5.80039 19.7099L5.15039 9.63989" stroke="#13669D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.3301 17H13.6601" stroke="#13669D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 13H14.5" stroke="#13669D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

const Icon = ({ width, height, type }: IconpropsType) => {
  switch (type) {
    case "notification":
      return <Notification />;
    case "message":
      return <Messsage />;
    case "search":
      return <Search />;
    case "arrowdown":
      return <Arrowdown width={width} height={height} />;
    case "edit":
      return <Edit />
    case 'delete':
      return <Delete/>
    
  }
};

export default Icon;
