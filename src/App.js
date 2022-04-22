import React from "react";
import Banner from "./components/Banner";
import CardProductItem from "./components/CardProductItem";
import { Box } from "@mui/material";
const typeComponent = {
  banner: function (content, index) {
    return <Banner content={content} key={index} />;
  },
  card: function (content, index) {
    return <CardProductItem content={content} key={index} />;
  }
};

const sectionTest = [
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
    children: [
      {
        id: "2d027de8-dcaf-40d7-b383-4b115eb7b9be",
        children: [
          {
            component: {
              type: "banner",
              content: [
                "https://cf.shopee.vn/file/fefe87d636e62b0f5f1d97f7c9f9b8f4"
              ]
            },
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
            component: {
              type: "card",
              content: [
                "https://cf.shopee.vn/file/a4eb7c61460ad6656355d6a37e5a222a",
                "ff",
                "988888"
              ]
            },
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
            component: {
              type: "banner",
              content: [
                "https://cf.shopee.vn/file/a4eb7c61460ad6656355d6a37e5a222a"
              ]
            },
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
            component: {
              type: "banner",
              content: [
                "https://cf.shopee.vn/file/fefe87d636e62b0f5f1d97f7c9f9b8f4"
              ]
            },
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
  }
];

export const App = ({ sections = sectionTest }) => {
  return (
    <div>
      {JSON.parse(sections).map(section => {
        console.log(sections);

        section.children = section.children.map(item => {
          item.children = item.children.map((item, index) => {
            return (
              item.component.type !== "" && (
                <CardProductItem key={index} content={item.component.content} />
              )
            );
          });
          return (
            <Box sx={{ marginRight: "20px" }} key={item.id}>
              {item.children}
            </Box>
          );
        });
        return (
          <Box sx={{ display: "flex" }} key={section.id}>
            {section.children}
          </Box>
        );
      })}
    </div>
  );
};
