<!DOCTYPE html>
<html>
<head>
    <title>Menu example</title>
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/bower_components/fancytree/dist/skin-win8/ui.fancytree.min.css">
    <link rel="stylesheet" href="/menu-page.css">
</head>
<body>

<div class="container">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <div class="panel-title pull-left">Menu configurator</div>
                    <div class="btn-group pull-right">
                        <button type="button" id="add-new-button" class="btn btn-default btn-sm">
                            <i class="glyphicon glyphicon-plus"></i>
                            <span>Add new</span>
                        </button>
                        <button type="button" id="save-button" class="btn btn-success btn-sm">
                            <i class="glyphicon glyphicon-floppy-disk"></i>
                            <span>Save</span>
                        </button>
                    </div>
                </div>
                <div class="panel-body">
                    <table class="table table-bordered" id="menu-configurator">
                        <thead>
                            <tr>
                                <th class="title">Title</th>
                                <th class="link">Link</th>
                                <th class="visible">Visible?</th>
                                <th class="featured">Featured?</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript" src="/bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="/bower_components/jquery-ui/jquery-ui.min.js"></script>
<script type="text/javascript" src="/bower_components/fancytree/dist/jquery.fancytree-all.min.js"></script>
<script type="text/javascript" src="/menu-page.js"></script>

</body>
</html>