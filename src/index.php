<?php
$title = 'Geneva Relay Marathon 2013' ;
$js_scripts = array('data.js' , 'histogram.js' , 'functions.js') ;
include($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>
<script>
var highlight = <?php echo (isset($_GET['team'])) ? "'" . $_GET['team'] . "'" : "'Average team'" ;?> ;
double_leg_index = <?php if(isset($_GET['double_leg_index'])){ echo $_GET['double_leg_index'] ; } else { echo '-1' ; } ?> ;
  <?php if(isset($_GET['double_leg'])) echo 'find_double_legs() ; ' , PHP_EOL ; ?>
</script>
  <div class="right">
    <h3>Graph</h3>
    <div class="blurb">
      <p>This page summarizes the different teams that took part in the Geneva Relay Marathon 2013.</p>
      <p>Highlight team
        <select id="select_team">
          <option value="Average team">Average team</option>
        </select>
        <input type="submit" value="Select team" onclick="update_highlight()"/>
      </p>
      <p>Sort by
        <select id="select_field">
          <option value="total_time">total time</option>
          <option value="leg_1">leg 1 time</option>
          <option value="leg_2">leg 2 time</option>
          <option value="leg_3">leg 3 time</option>
          <option value="leg_4">leg 4 time</option>
          <option value="leg_5">leg 5 time</option>
          <option value="leg_6">leg 6 time</option>
        </select>
         in
        <select id="select_dir">
          <option value="asc" >ascending</option>
          <option value="desc">descending</option>
        </select>
        order. <input type="submit" value="Go!" onclick="update_sort()"/>
      </p>
      <table id="team_details">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Rank</th>
            <th>Overtook</th>
            <th>Overtaken by</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="t_leg0">Team:</th>
            <td class="t_leg0" id="td_team_name"></td>
            <td class="t_leg0" id="td_team_time"></td>
            <td class="t_leg0" id="td_team_rank"></td>
            <td class="t_leg0" id="td_team_overtook"></td>
            <td class="t_leg0" id="td_team_overtaken"></td>
          </tr>
          <tr>
            <th class="t_leg1">Leg 1:</th>
            <td class="t_leg1" id="td_leg1_name"></td>
            <td class="t_leg1" id="td_leg1_time"></td>
            <td class="t_leg1" id="td_leg1_rank"></td>
            <td class="t_leg1" id="td_leg1_overtook"></td>
            <td class="t_leg1" id="td_leg1_overtaken"></td>
          </tr>
          <tr>
            <th class="t_leg2">Leg 2:</th>
            <td class="t_leg2" id="td_leg2_name"></td>
            <td class="t_leg2" id="td_leg2_time"></td>
            <td class="t_leg2" id="td_leg2_rank"></td>
            <td class="t_leg2" id="td_leg2_overtook"></td>
            <td class="t_leg2" id="td_leg2_overtaken"></td>
          </tr>
          <tr>
            <th class="t_leg3">Leg 3:</th>
            <td class="t_leg3" id="td_leg3_name"></td>
            <td class="t_leg3" id="td_leg3_time"></td>
            <td class="t_leg3" id="td_leg3_rank"></td>
            <td class="t_leg3" id="td_leg3_overtook"></td>
            <td class="t_leg3" id="td_leg3_overtaken"></td>
          </tr>
          <tr>
            <th class="t_leg4">Leg 4:</th>
            <td class="t_leg4" id="td_leg4_name"></td>
            <td class="t_leg4" id="td_leg4_time"></td>
            <td class="t_leg4" id="td_leg4_rank"></td>
            <td class="t_leg4" id="td_leg4_overtook"></td>
            <td class="t_leg4" id="td_leg4_overtaken"></td>
          </tr>
          <tr>
            <th class="t_leg5">Leg 5:</th>
            <td class="t_leg5" id="td_leg5_name"></td>
            <td class="t_leg5" id="td_leg5_time"></td>
            <td class="t_leg5" id="td_leg5_rank"></td>
            <td class="t_leg5" id="td_leg5_overtook"></td>
            <td class="t_leg5" id="td_leg5_overtaken"></td>
          </tr>
          <tr>
            <th class="t_leg6">Leg 6:</th>
            <td class="t_leg6" id="td_leg6_name"></td>
            <td class="t_leg6" id="td_leg6_time"></td>
            <td class="t_leg6" id="td_leg6_rank"></td>
            <td class="t_leg6" id="td_leg6_overtook"></td>
            <td class="t_leg6" id="td_leg6_overtaken"></td>
          </tr>
        </tbody>
      </table>
      <div id="div_double_legs"></div>

      <p>Overall standings:</p>
      <canvas id="canvas_graph" width="750" height=3795"/>
    </div>
  </div>

  <div class="right">
    <h3>Total time</h3>
    <div class="blurb">
      <canvas id="canvas_total_time" width="750" height=750"/>
    </div>
  </div>

  <div class="right">
    <h3>Leg 1</h3>
    <div class="blurb">
      <canvas id="canvas_leg_1" width="750" height="750"/>
    </div>
  </div>

  <div class="right">
    <h3>Leg 2</h3>
    <div class="blurb">
      <canvas id="canvas_leg_2" width="750" height=750"/>
    </div>
  </div>

  <div class="right">
    <h3>Leg 3</h3>
    <div class="blurb">
      <canvas id="canvas_leg_3" width="750" height=750"/>
    </div>
  </div>

  <div class="right">
    <h3>Leg 4</h3>
    <div class="blurb">
      <canvas id="canvas_leg_4" width="750" height=750"/>
    </div>
  </div>

  <div class="right">
    <h3>Leg 5</h3>
    <div class="blurb">
      <canvas id="canvas_leg_5" width="750" height=750"/>
    </div>
  </div>

  <div class="right">
    <h3>Leg 6</h3>
    <div class="blurb">
      <canvas id="canvas_leg_6" width="750" height=750"/>
    </div>
  </div>

<?php foot() ; ?>
