export default async function CountryData(apiLink) {
    const request = await fetch(apiLink);
    if (!request.ok) {
        throw new Error("The country is no longer exists");
    }
    else {
        const response = await request.json();
        return response;
    }
}
