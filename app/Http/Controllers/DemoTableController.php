<?php

namespace App\Http\Controllers;

use App\DemoTable;
use App\JsonFile;
use Illuminate\Http\Request;
use Psy\Util\Json;
use View;
use JS;

class DemoTableController extends Controller
{
    public function createTable($col=NULL,$order=NULL){

        $returnJSON = true;

        if(!isset($col)) {
            $col = 'LName';
            $returnJSON = false;
        }
        if(!isset($order)) {
            $order = -1;
            $returnJSON = false;
        }

        $sortBy = (object)[ 'col' => $col,
                            'order' => $order  ];

        $jsonFile = new JsonFile();

        $this->sortJSONFile($jsonFile->data, $sortBy);

        $tableData = new DemoTable($jsonFile);

        JS::put([
            'tableData' => json_decode(json_encode($tableData))
        ]);

        if(!$returnJSON){
            return View::make('index')->with('tableData', $tableData);
        }else{
            return json_encode($tableData);
        }
    }

    public function sortJSONFile(&$data, $sortBy){
        usort($data, function($a, $b) use ($sortBy){

            $colName = $sortBy->col;

            if($sortBy->order == -1){
                $first = strtolower($a->$colName);
                $second = strtolower($b->$colName);
            }else if($sortBy->order == 1){
                $first = strtolower($b->$colName);
                $second = strtolower($a->$colName);
            }

            return strcmp($first, $second);
        });
    }
}
