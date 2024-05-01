// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.


const generateItem = (filename) => {
    const item = `
                        <div class="card shadow-sm p-3">
                            <img class="bd-placeholder-img card-img-top" width="100%" height="128" src="img/${filename}">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    </div>
                                    <small class="text-muted">${filename}</small>
                                </div>
                            </div>
                        </div>
`;

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('col');
    itemDiv.innerHTML = item;
    document.getElementById('items').append(itemDiv);
}


window.addEventListener('DOMContentLoaded', (event) => {
    items.forEach(item => {
        generateItem(item);
    });
});