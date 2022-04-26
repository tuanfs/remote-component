import React from "react";
import Banner from "./components/Banner";
import CardProductItem from "./components/CardProductItem";
import Coupon from "./components/Coupon";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

const typeComponent = {
  banner: function (section, index) {
    return <Banner section={section} key={index} />;
  },
  cardProduct: function (section, index) {
    return <CardProductItem section={section} key={index} />;
  },
  coupon: function (section, index) {
    return <Coupon section={section} key={index} />;
  }
};

const sectionDefault = [
  {
    spacing: {
      mt: {
        value: 14,
        title: "margin-top"
      },
      ml: {
        value: 0,
        title: ""
      },
      mb: {
        value: 9,
        title: "margin-bottom"
      },
      mr: {
        value: 5,
        title: "margin-right"
      },
      pb: {
        value: 4,
        title: "padding-bottom"
      }
    },
    id: "6702caf1-4da7-493c-92bd-4d7e506d40da",
    columnActive: 5,
    type: "banner",
    children: [
      {
        id: "2d027de8-dcaf-40d7-b383-4b115eb7b9be",
        children: [
          {
            content: [
              "https://cf.shopee.vn/file/fefe87d636e62b0f5f1d97f7c9f9b8f4"
            ],
            id: "d34f201e-6663-43fa-b42a-53552a287d2d",
            _id: "6260bded8b040cc54f9fab0c"
          }
        ],
        _id: "6260bded8b040cc54f9fab0b"
      },
      {
        id: "4084e5be-e80e-4ddc-8f3a-69c3f87b7c9c",
        children: [
          {
            content: [
              "https://cf.shopee.vn/file/a4eb7c61460ad6656355d6a37e5a222a",
              "ff"
            ],
            id: "746acdb3-f323-4c07-b33b-0f6473364781",
            _id: "62611fdd5ff1a347e01043de"
          }
        ],
        _id: "6260bd758b040cc54f9fab00"
      },
      {
        id: "6a76e199-4d30-40ae-8cab-4051e80da98f",
        children: [
          {
            content: [
              "https://cf.shopee.vn/file/a4eb7c61460ad6656355d6a37e5a222a"
            ],

            id: "9048172c-533b-4b9b-b698-e2cce8ed4010",
            _id: "62611fa75ff1a347e01043bb"
          }
        ],
        _id: "6260bded8b040cc54f9fab0d"
      },
      {
        id: "76d27a3b-dafd-448c-91b6-d670c5ca87be",
        children: [
          {
            content: [
              "https://cf.shopee.vn/file/fefe87d636e62b0f5f1d97f7c9f9b8f4"
            ],
            id: "6a899892-ac7a-4bc9-801c-d7ccd8180d49",
            _id: "6260bded8b040cc54f9fab0f"
          }
        ],
        _id: "6260bded8b040cc54f9fab0e"
      },
      {
        id: "32bdaa3e-7fa1-41ad-a5b3-b002ec1805ae",
        children: [],
        _id: "626120005ff1a347e01043f9"
      }
    ],
    _id: "6260bd758b040cc54f9faaff"
  },
  {
    spacing: {
      mt: {
        value: 14,
        title: "margin-top"
      },
      ml: {
        value: 0,
        title: ""
      },
      mb: {
        value: 9,
        title: "margin-bottom"
      },
      mr: {
        value: 5,
        title: "margin-right"
      },
      pb: {
        value: 4,
        title: "padding-bottom"
      }
    },
    id: "6702caf1-4da7-493c-92bd-4d7e506d40da",
    columnActive: 5,
    type: "coupon",
    children: [
      {
        id: "2d027de8-dcaf-40d7-b383-4b115eb7b9be",
        children: [
          {
            content: [
              "https://cf.shopee.vn/file/fefe87d636e62b0f5f1d97f7c9f9b8f4"
            ],
            id: "d34f201e-6663-43fa-b42a-53552a287d2d",
            _id: "6260bded8b040cc54f9fab0c"
          }
        ],
        _id: "6260bded8b040cc54f9fab0b"
      },
      {
        id: "4084e5be-e80e-4ddc-8f3a-69c3f87b7c9c",
        children: [
          {
            content: [
              "https://cf.shopee.vn/file/a4eb7c61460ad6656355d6a37e5a222a",
              "ff"
            ],
            id: "746acdb3-f323-4c07-b33b-0f6473364781",
            _id: "62611fdd5ff1a347e01043de"
          }
        ],
        _id: "6260bd758b040cc54f9fab00"
      },
      {
        id: "6a76e199-4d30-40ae-8cab-4051e80da98f",
        children: [
          {
            content: [
              "https://cf.shopee.vn/file/a4eb7c61460ad6656355d6a37e5a222a"
            ],

            id: "9048172c-533b-4b9b-b698-e2cce8ed4010",
            _id: "62611fa75ff1a347e01043bb"
          }
        ],
        _id: "6260bded8b040cc54f9fab0d"
      },
      {
        id: "76d27a3b-dafd-448c-91b6-d670c5ca87be",
        children: [
          {
            content: [
              "https://cf.shopee.vn/file/fefe87d636e62b0f5f1d97f7c9f9b8f4"
            ],
            id: "6a899892-ac7a-4bc9-801c-d7ccd8180d49",
            _id: "6260bded8b040cc54f9fab0f"
          }
        ],
        _id: "6260bded8b040cc54f9fab0e"
      },
      {
        id: "32bdaa3e-7fa1-41ad-a5b3-b002ec1805ae",
        children: [],
        _id: "626120005ff1a347e01043f9"
      }
    ],
    _id: "6260bd758b040cc54f9faaff"
  },
  {
    spacing: {
      mt: {
        value: 14,
        title: "margin-top"
      },
      ml: {
        value: 0,
        title: ""
      },
      mb: {
        value: 9,
        title: "margin-bottom"
      },
      mr: {
        value: 5,
        title: "margin-right"
      },
      pb: {
        value: 4,
        title: "padding-bottom"
      }
    },
    id: "6702caf1-4da7-493c-92bd-4d7e506d40da",
    columnActive: 5,
    type: "cardProduct",
    children: [
      {
        id: "2d027de8-dcaf-40d7-b383-4b115eb7b9be",
        children: [
          {
            content: [
              "",
              "",
              "4",
              JSON.stringify([
                {
                  _id: "6265e5cfec11bce10e5e1912",
                  name:
                    "Áo Polo Nam ATINO thanh lịch vải cá sấu Cotton cao cấp thoáng mát trẻ trung chuẩn form regular PL11.3009",
                  price: 9999,
                  img:
                    "https://cf.shopee.vn/file/22e4fa0ea56746ccc8d7b58ebfd16091",
                  createdAt: "2022-04-25T00:05:35.706Z",
                  updatedAt: "2022-04-25T00:05:35.706Z",
                  __v: 0
                },
                {
                  _id: "6265e615ec11bce10e5e1914",
                  name:
                    "HÀNG SIÊU CẤP🔥Dép thời trang nam nữ, Dép hottrend 2022 quai ngang cao su non cực êm chân",
                  price: 8888,
                  img:
                    "https://cf.shopee.vn/file/24b15176f7ea26610d73880120c18138",
                  createdAt: "2022-04-25T00:06:45.147Z",
                  updatedAt: "2022-04-25T00:06:45.147Z",
                  __v: 0
                },
                {
                  _id: "6265e647ec11bce10e5e1916",
                  name:
                    "Áo Polo Nam FEEL GOOD có cổ bẻ KẺ SỌC thun cao cấp đẹp vải cá sấu cotton đen trắng ngắn tay form rộng trẻ trung cá tính",
                  price: 6666,
                  img:
                    "https://cf.shopee.vn/file/e432930fb9f0f85d7fb6ffdd6b3f9062",
                  createdAt: "2022-04-25T00:07:35.992Z",
                  updatedAt: "2022-04-25T00:07:35.992Z",
                  __v: 0
                },
                {
                  _id: "6265e673ec11bce10e5e1918",
                  name:
                    "[Mã LTP50 giảm 50000 đơn 150000] [MẪU MỚI] Áo thun cổ tròn nam logo LAVIC vải thun cotton mát, mịn LV2010",
                  price: 4444,
                  img:
                    "https://cf.shopee.vn/file/811222f283f53bc5bb63f7e8894afdd0",
                  createdAt: "2022-04-25T00:08:19.902Z",
                  updatedAt: "2022-04-25T00:08:19.902Z",
                  __v: 0
                },
                {
                  _id: "6265e6aeec11bce10e5e191a",
                  name: "Áo Thun Teelab Grey Trame TS049",
                  price: 6766,
                  img:
                    "https://cf.shopee.vn/file/00a621e208b7c1ff1aed7b577c0a5729",
                  createdAt: "2022-04-25T00:09:18.869Z",
                  updatedAt: "2022-04-25T00:09:18.869Z",
                  __v: 0
                },
                {
                  _id: "6265e6dfec11bce10e5e191c",
                  name: "Dép da nam mới nhất đế xám ghi đế lõm kèm video mới",
                  price: 7766,
                  img:
                    "https://cf.shopee.vn/file/64859d0554d6afd2037db19a1dfb6d53",
                  createdAt: "2022-04-25T00:10:07.688Z",
                  updatedAt: "2022-04-25T00:10:07.688Z",
                  __v: 0
                },
                {
                  _id: "6265e728ec11bce10e5e191e",
                  name:
                    "HÀNG SIÊU CẤP, Dép nam quai ngang given đế trắng quai xanh - dép Balen VIP",
                  price: 1000,
                  img:
                    "https://cf.shopee.vn/file/64e5e184a16d68dc52f23c1886b25c2b",
                  createdAt: "2022-04-25T00:11:20.662Z",
                  updatedAt: "2022-04-25T00:11:20.662Z",
                  __v: 0
                },
                {
                  _id: "6265e74fec11bce10e5e1920",
                  name: "Áo Polo Lacoste - Polo Cá Sấu Hot Trend",
                  price: 2000,
                  img:
                    "https://cf.shopee.vn/file/12e9ab1e207239af8fab0ea93a3019bc",
                  createdAt: "2022-04-25T00:11:59.977Z",
                  updatedAt: "2022-04-25T00:11:59.977Z",
                  __v: 0
                },
                {
                  _id: "6265e782ec11bce10e5e1922",
                  name:
                    "Dép Tông Lào Thái huyền thoại ĐEN, TRẮNG, VÀNG, XANH DƯƠNG, ĐỎ, XANH NGỌC",
                  price: 3000,
                  img:
                    "https://cf.shopee.vn/file/ec6e778d75ac23f160d66933a7074010",
                  createdAt: "2022-04-25T00:12:50.014Z",
                  updatedAt: "2022-04-25T00:12:50.014Z",
                  __v: 0
                },
                {
                  _id: "6265e7b2ec11bce10e5e1924",
                  name:
                    "5 Mẫu dép Nam mới nhất kèm video Thật Dép da nam đé kem",
                  price: 40020,
                  img:
                    "https://cf.shopee.vn/file/8c54899580916812c66276e454df3900",
                  createdAt: "2022-04-25T00:13:38.871Z",
                  updatedAt: "2022-04-25T00:13:38.871Z",
                  __v: 0
                }
              ])
            ],
            id: "d34f201e-6663-43fa-b42a-53552a287d2d",
            _id: "6260bded8b040cc54f9fab0c"
          }
        ],
        _id: "6260bded8b040cc54f9fab0b"
      }
    ],
    _id: "6260bd758b040cc54f9faaff"
  }
];

export const App = ({
  sections = JSON.stringify(sectionDefault),
  path = "/"
}) => {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path={path}
          element={
            <Box sx={{ display: "flex" }}>
              <Box sx={{ margin: "auto", width: "90%", overflow: "hidden" }}>
                {JSON.parse(sections).map((section, index) => {
                  return (
                    <Box key={index} sx={{ display: "flex" }}>
                      <Box sx={{ margin: "auto" }}>
                        {section.type !== "" &&
                          typeComponent[section.type](section, index)}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          }
        />
      </Routes>
    </Router>
  );
};
