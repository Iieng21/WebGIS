var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Export_Output_1 = new ol.format.GeoJSON();
var features_Export_Output_1 = format_Export_Output_1.readFeatures(json_Export_Output_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_1.addFeatures(features_Export_Output_1);
var lyr_Export_Output_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_Output_1, 
                style: style_Export_Output_1,
                popuplayertitle: "Export_Output",
                interactive: true,
                title: '<img src="styles/legend/Export_Output_1.png" /> Export_Output'
            });
var format_bumil_2 = new ol.format.GeoJSON();
var features_bumil_2 = format_bumil_2.readFeatures(json_bumil_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bumil_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bumil_2.addFeatures(features_bumil_2);
var lyr_bumil_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bumil_2, 
                style: style_bumil_2,
                popuplayertitle: "bumil",
                interactive: true,
                title: '<img src="styles/legend/bumil_2.png" /> bumil'
            });
var format_PACA_3 = new ol.format.GeoJSON();
var features_PACA_3 = format_PACA_3.readFeatures(json_PACA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PACA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PACA_3.addFeatures(features_PACA_3);
var lyr_PACA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PACA_3, 
                style: style_PACA_3,
                popuplayertitle: "PACA",
                interactive: true,
                title: '<img src="styles/legend/PACA_3.png" /> PACA'
            });
var format_shpgamis_4 = new ol.format.GeoJSON();
var features_shpgamis_4 = format_shpgamis_4.readFeatures(json_shpgamis_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shpgamis_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shpgamis_4.addFeatures(features_shpgamis_4);
var lyr_shpgamis_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shpgamis_4, 
                style: style_shpgamis_4,
                popuplayertitle: "shpgamis",
                interactive: true,
                title: '<img src="styles/legend/shpgamis_4.png" /> shpgamis'
            });
var format_lansia_5 = new ol.format.GeoJSON();
var features_lansia_5 = format_lansia_5.readFeatures(json_lansia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lansia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lansia_5.addFeatures(features_lansia_5);
var lyr_lansia_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lansia_5, 
                style: style_lansia_5,
                popuplayertitle: "lansia",
                interactive: true,
                title: '<img src="styles/legend/lansia_5.png" /> lansia'
            });
var format_RumahSakit_6 = new ol.format.GeoJSON();
var features_RumahSakit_6 = format_RumahSakit_6.readFeatures(json_RumahSakit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_6.addFeatures(features_RumahSakit_6);
var lyr_RumahSakit_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_6, 
                style: style_RumahSakit_6,
                popuplayertitle: "Rumah Sakit",
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_6.png" /> Rumah Sakit'
            });
var format_Puskesmas_7 = new ol.format.GeoJSON();
var features_Puskesmas_7 = format_Puskesmas_7.readFeatures(json_Puskesmas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_7.addFeatures(features_Puskesmas_7);
var lyr_Puskesmas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puskesmas_7, 
                style: style_Puskesmas_7,
                popuplayertitle: "Puskesmas",
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_7.png" /> Puskesmas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Export_Output_1.setVisible(true);lyr_bumil_2.setVisible(true);lyr_PACA_3.setVisible(true);lyr_shpgamis_4.setVisible(true);lyr_lansia_5.setVisible(true);lyr_RumahSakit_6.setVisible(true);lyr_Puskesmas_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Export_Output_1,lyr_bumil_2,lyr_PACA_3,lyr_shpgamis_4,lyr_lansia_5,lyr_RumahSakit_6,lyr_Puskesmas_7];
lyr_Export_Output_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_bumil_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'TimeSpan': 'TimeSpan', 'TimeStamp': 'TimeStamp', 'BeginTime': 'BeginTime', 'EndTime': 'EndTime', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_PACA_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'TimeSpan': 'TimeSpan', 'TimeStamp': 'TimeStamp', 'BeginTime': 'BeginTime', 'EndTime': 'EndTime', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_shpgamis_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', });
lyr_lansia_5.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'TimeSpan': 'TimeSpan', 'TimeStamp': 'TimeStamp', 'BeginTime': 'BeginTime', 'EndTime': 'EndTime', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_RumahSakit_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Puskesmas_7.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'Alamat': 'Alamat', 'No.telp': 'No.telp', });
lyr_Export_Output_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_bumil_2.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'TimeSpan': '', 'TimeStamp': '', 'BeginTime': '', 'EndTime': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', });
lyr_PACA_3.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'TimeSpan': '', 'TimeStamp': '', 'BeginTime': '', 'EndTime': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', });
lyr_shpgamis_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', });
lyr_lansia_5.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'TimeSpan': '', 'TimeStamp': '', 'BeginTime': '', 'EndTime': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', });
lyr_RumahSakit_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Puskesmas_7.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', 'Alamat': '', 'No.telp': '', });
lyr_Export_Output_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_bumil_2.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'TimeSpan': 'no label', 'TimeStamp': 'no label', 'BeginTime': 'no label', 'EndTime': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_PACA_3.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'TimeSpan': 'no label', 'TimeStamp': 'no label', 'BeginTime': 'no label', 'EndTime': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_shpgamis_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', });
lyr_lansia_5.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'TimeSpan': 'no label', 'TimeStamp': 'no label', 'BeginTime': 'no label', 'EndTime': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_RumahSakit_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Puskesmas_7.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'Alamat': 'no label', 'No.telp': 'no label', });
lyr_Puskesmas_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});