<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Excel;
use DNS1D;
use DNS2D;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class BarcodeController extends Controller
{
    public function download($format, $quantity)
    {
    	$this->format = $format;
    	$this->quantity = $quantity;

		return view('excel.barcode')
			->with('format', $this->format)
			->with('quantity', $this->quantity);
    }
}
