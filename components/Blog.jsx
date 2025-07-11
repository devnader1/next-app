import React from "react";
import Category from "./Category";

function Blog() {
  return (
    <section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Category
              title={`one category`}
              desc={"loremgsdfgsdhgfhsdgfhgdj"}
              id={1}
            />
            <Category
              title={`two category`}
              desc={"loremgsdfgsdhgfhsdgfhgdj"}
              id={2}
            />
            <Category
              title={`three category`}
              desc={"loremgsdfgsdhgfhsdgfhgdj"}
              id={3}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Blog;
