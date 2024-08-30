/** @format */
import {v4 as uuid} from "uuid";
import {IFile} from "../interfaces";

export const fileTree: IFile = {
	id: uuid(),
	name: "VS Code Clone",
	isFolder: true,
	children: [
		{
			id: uuid(),
			name: "node_modules",
			isFolder: true,
			children: [
				{
					id: uuid(),
					name: ".vite",
					isFolder: true,
					children: [
						{
							id: uuid(),
							name: "react.js",
							isFolder: false,
							content: `react file content
							export const react = require("react");
							console.log(react);`,
						},
					],
				},
				{
					id: uuid(),
					name: "public",
					isFolder: true,
					children: [
						{
							id: uuid(),
							name: "index.html",
							isFolder: false,
							content: `index file content
							const index = require("index");
							console.log(index);`,
						},
						{
							id: uuid(),
							name: "style.css",
							isFolder: false,
							content: `style file content
							const style = require("style");
							console.log(style);`,
						},
						{
							id: uuid(),
							name: "js.js",
							isFolder: false,
							content: `js file content
							const js = require("js");
							console.log(js);`,
						},
					],
				},
			],
		},
	],
};
