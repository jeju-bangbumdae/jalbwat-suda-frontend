"use client";
import axios from "axios";
import { useEffect } from "react";


export default function HomePage({ baseURL }) {

	console.log("!!", baseURL)

	const getData = async () => {
		try {
			const res = await axios.get(`${baseURL}/`)
			console.log(res)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getData();
	}, [])
	return (
		<div>text</div>
	)
}