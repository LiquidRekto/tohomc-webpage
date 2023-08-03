let candidates = ["/","#"];

const url = (baseUrl, dest) => {
    let isPartial = false;
    candidates.forEach((v) => {
        if (dest.startsWith(v)) {
            isPartial = true;
            return;
        }   
    });
    baseUrl = /\/$/.exec(baseUrl) ? baseUrl.slice(0,-1) : baseUrl;
    return isPartial ? baseUrl + dest : dest;
};

export default url;