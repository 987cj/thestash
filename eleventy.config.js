import { DateTime } from "luxon";

export default function(eleventyConfig) {
	eleventyConfig.setInputDirectory("src");

	eleventyConfig.addPassthroughCopy("src/index.js");

	eleventyConfig.setLiquidOptions({
		orderedFilterParameters: true,
	});

	eleventyConfig.addDateParsing(function(dateValue) {
		if (typeof dateValue === "string") {
			return DateTime.fromFormat(dateValue, "yyyy-MM-dd z");
		}
	});

	eleventyConfig.addFilter("formatDateOutput", function(value) {
		return(value.toLocaleDateString());
	})
};