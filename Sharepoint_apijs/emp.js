function addListItem(){
    var siteUrl = window.location.protocol + '//' + window.location.host + _spPageContext

    $.ajax({

//ListItemEntityTypeFullName <--propterty name of the list
//Employee <-name of the list

        url: siteUrl + "/_api/lists/getbytitle('Employee')/Items",
        type: "POST",
        data: JSON.stringify
        ({
            _metadata:
            {
                type:"SP.Data.EmployeeListItem"
            },
        Title: $("#EmpName").val(),
        Badge:$("#EmpBadge").val()
    }),
        headers: {
            "accept": "applicatioh/json;odata=verbose",
            "context-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: function (data) {
            console.log(data);
        },
        error: function () {
            console.log("Failed.");
        }
    });
}



// Note: https://www.youtube.com/watch?v=bf-X3TgiDyk&list=PL0MniIVMkp8cDQSFRgqmPlUVdqz097dXE&index=6 
// https://sharepointsite.sharepoint.com/sites/NameOfSite//_api/lists/getbytitle('Employee')?select=ListItemEntityTypeFullName

// GetItemList - https://www.youtube.com/watch?v=HSmAuGqFIDg&list=PL0MniIVMkp8cDQSFRgqmPlUVdqz097dXE&index=7 