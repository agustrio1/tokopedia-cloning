export const getData = async (url : string) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // Tambahkan opsi cache sesuai kebutuhan
        cache: "no-store",
      });
  
      if (response.ok) {
        const result = await response.json();
        return result.data;
      } else {
        console.error(
          "Error fetching data:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

   return null
  };
  