import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { TOSContent } from "./data/tos";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <>
                    <h1 style={{ textAlign: "center" }}>{TOSContent.title}</h1>
                    {TOSContent.paragraphs.map((paragraph) => (
                        <div
                            key={paragraph.title}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <h2 style={{ margin: 0, padding: 0 }}>
                                {paragraph.title}
                            </h2>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: paragraph.text,
                                }}
                            />
                        </div>
                    ))}
                </>
            ),
        },
    ],
    { basename: "/tos" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
