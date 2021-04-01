import React from "react";
import "../styles/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import FontIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png?__cf_chl_captcha_tk__=016d405eb5bd2a5c751ff989448335601a8dec25-1616733833-0-AergNGnmK9jiGvn9wBB8ghkDZbZegnbkfQ0O-BJglLm4exJkh2T1zqKKAupCs-l89jYQ0mrKocejgMR36OnyRD9fVHZ7jtZ_I8t7Rr1plYCaKMlz17Fz7zO4nhRFeVVVFztbkVHWbYVwfLYjxalJ1W25kW87ufffxpjCn0B4VHXfEwqy1eGEjc5j1qro2PO0IOnBDlUcvwNWYHuCUPKbtAskUpTfSIPbt9OnE1J-DAFrbWTu9HksJm45t_AjIO5-urwgtASHF1X_DzNdCIsKgHdTYixs-eNTV0QWgYIPsZojDC-g7VBAvp7o2hD0T21BjiwdMD1tPKklLAtAHxiRBFISSN8caW8TyZqnkpKgmGPCo1V2z1XDmCLEvBw1NX-We2nclD29xYqzKo-JzYCp3yh4DN7Rbh1nnTQtaLz4fxXq9MO3VCTbCTTqDiBoxFt_ubUAHyxM8BmToyoDNfZsxyNB6EaJXeQ_7AgCAVeH8VW-dxrHcgzasQc8tmRq6ELZrvvGUV6zPj3JkGFaBrreWPwz1z08TCbpXFnLC0A3-0RdGFN7SWRtkm6TLONBBGfVbKWobHUK4HtzX8UItMXxk44nTFgC82NoF2GD3ob-_ud5Z6SIDKHMZS51Me8uFZg4JdN11Fnf_0DNOFGCdyy5nVc"
      />
      <IconButton>
        <FontIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
