var addSkill = $('.add-skill-btn');



addSkill.on('click', function(){
    console.log($('.input-box').val());
    let skill = $('.input-box').val();
    $('tbody')
        .append(`<tr>
        <td class="btn"><button class="remove-btn"><image src="https://www.sccpre.cat/mypng/full/23-233226_computer-icons-icon-design-x-mark-download-checkbox.png"></image></button></td><td class="skill">${skill}</td>`);
});